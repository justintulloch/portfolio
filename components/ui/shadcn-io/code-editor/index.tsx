'use client';

import * as React from 'react';
import { useInView, type UseInViewOptions } from 'motion/react';
import { useTheme } from 'next-themes';
import { Copy, Check } from 'lucide-react';
import { Button } from '../button';
// 🔧 fixed stray space in path
import { cn } from '@/lib/utils ';

interface CopyButtonProps {
  content: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
  onCopy?: (content: string) => void;
}

function CopyButton({
  content,
  size = 'default',
  variant = 'default',
  className,
  onCopy,
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      onCopy?.(content);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Copy failed (Clipboard API). Is this a secure context?', err);
    }
  };

  return (
    <Button
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      size={size}
      variant={variant}
      onClick={handleCopy}
      className={cn('h-8 w-8 p-0', className)}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
    </Button>
  );
}

interface CodeEditorProps extends Omit<React.ComponentProps<'div'>, 'onCopy'> {
  children: string;
  lang: string;
  themes?: { light: string; dark: string };
  duration?: number;
  delay?: number;
  header?: boolean;
  dots?: boolean;
  icon?: React.ReactNode;
  cursor?: boolean;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  copyButton?: boolean;
  writing?: boolean;
  title?: string;
  onDone?: () => void;
  onCopy?: (content: string) => void;
}

function CodeEditor({
  children: code,
  lang,
  themes = { light: 'github-light', dark: 'github-dark' },
  duration = 5,
  delay = 0,
  className,
  header = true,
  dots = true,
  icon,
  cursor = false,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  copyButton = false,
  writing = true,
  title,
  onDone,
  onCopy,
  ...props
}: CodeEditorProps) {
  const { resolvedTheme } = useTheme();
  const editorRef = React.useRef<HTMLDivElement>(null);

  const [visibleCode, setVisibleCode] = React.useState('');
  const [highlightedCode, setHighlightedCode] = React.useState('');
  const [isDone, setIsDone] = React.useState(false);

  const isElInView = useInView(editorRef, { once: inViewOnce, margin: inViewMargin });
  const isInView = !inView || isElInView;

  // ---- Deterministic typewriter using rAF ----
  const rafRef = React.useRef<number | null>(null);
  React.useEffect(() => {
    if (!writing) {
      setVisibleCode(code);
      onDone?.();
      return;
    }
    if (!code.length || !isInView) return;

    const totalMs = Math.max(1, duration) * 1000;
    const startAt = performance.now() + delay * 1000;
    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled) return;

      if (now < startAt) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startAt;
      const progress = Math.min(1, elapsed / totalMs);
      const count = Math.floor(progress * code.length);
      const next = code.slice(0, count);

      setVisibleCode(next);
      editorRef.current?.scrollTo({ top: editorRef.current.scrollHeight, behavior: 'smooth' });

      if (count < code.length) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsDone(true);
        onDone?.();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [code, duration, delay, isInView, writing, onDone]);

  // ---- Shiki highlight for the currently visible code ----
  React.useEffect(() => {
    if (!visibleCode.length || !isInView) return;

    const loadHighlightedCode = async () => {
      const { codeToHtml } = await import('shiki/bundle/full');
      const html = await codeToHtml(visibleCode, {
        lang,
        themes: { light: themes.light, dark: themes.dark },
        defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
      });
      setHighlightedCode(html);
    };

    void loadHighlightedCode().catch((err) => {
      console.error('Shiki highlighting failed:', err);
    });
  }, [lang, themes, resolvedTheme, visibleCode, isInView]);

  return (
    <div
      data-slot="code-editor"
      className={cn(
        // ✅ Fluid width; responsive heights per breakpoint
        'relative bg-muted/50 w-full border border-border overflow-hidden flex flex-col rounded-xl',
        'h-64 sm:h-80 md:h-[420px] lg:h-[480px]',
        // (optional) cap max width when used in wide layouts
        'max-w-screen-lg',
        className,
      )}
      {...props}
    >
      {header ? (
        <div className="bg-muted border-b border-border/75 dark:border-border/50 relative flex items-center justify-between h-10 px-3 sm:px-4">
          {dots && (
            <div className="flex gap-x-2">
              <div className="size-2 rounded-full bg-red-500" />
              <div className="size-2 rounded-full bg-yellow-500" />
              <div className="size-2 rounded-full bg-green-500" />
            </div>
          )}
          {title && (
            <div
              className={cn(
                'flex items-center gap-2',
                dots && 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              )}
            >
              {icon ? (
                <div
                  className="text-muted-foreground [&_svg]:size-3.5"
                  dangerouslySetInnerHTML={typeof icon === 'string' ? { __html: icon } : undefined}
                >
                  {typeof icon !== 'string' ? icon : null}
                </div>
              ) : null}
              <figcaption className="flex-1 truncate text-muted-foreground text-[12px] sm:text-[13px]">
                {title}
              </figcaption>
            </div>
          )}
          {copyButton && (
            <CopyButton
              content={code}
              size="sm"
              variant="ghost"
              className="-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
              onCopy={onCopy}
            />
          )}
        </div>
      ) : (
        copyButton && (
          <CopyButton
            content={code}
            size="sm"
            variant="ghost"
            className="absolute right-2 top-2 z-[2] backdrop-blur-md bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
            onCopy={onCopy}
          />
        )
      )}

      <div
        ref={editorRef}
        className="h-[calc(100%-2.5rem)] sm:h-[calc(100%-2.5rem)] w-full text-[12px] sm:text-sm p-3 sm:p-4 font-mono overflow-auto flex-1"
      >
        <div
          className={cn(
            '[&>pre,_&_code]:!bg-transparent [&>pre,_&_code]:[background:transparent_!important] [&>pre,_&_code]:border-none [&_code]:!text-[12px] sm:[&_code]:!text-[13px]',
            cursor && !isDone
              ? "[&_.line:last-of-type::after]:content-['|'] [&_.line:last-of-type::after]:animate-pulse [&_.line:last-of-type::after]:inline-block [&_.line:last-of-type::after]:w-[1ch]"
              : '',
          )}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
}

export { CodeEditor, CopyButton };
export type { CodeEditorProps, CopyButtonProps };