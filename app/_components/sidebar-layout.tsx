/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils ' // <- fixed stray space

interface SidebarLayoutProps {
  children: React.ReactNode
}

const navItems: [string, string][] = [
  ['Research', '#research'],
  ['Safety', '/safety/'],
  ['For Business', '#business'],
  ['ChatGPT', '/chatgbt/'],
  ['Sora', '/platform'],
  ['API Platform', '/platform'],
  ['Stories', '/sora/'],
  ['Company', '/sora/'],
  ['News', '/sora/'],
]

// -------- smooth scroll helpers --------
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(m.matches)
    update()
    m.addEventListener?.('change', update)
    return () => m.removeEventListener?.('change', update)
  }, [])
  return reduced
}

// Hook to detect mobile/desktop breakpoint
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return isMobile
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const isMobile = useIsMobile()
  const [isDesktopOpen, setDesktopOpen] = useState(false) // Changed to false by default
  const [activeHash, setActiveHash] = useState<string>('')

  // Close sidebar when switching to mobile
  useEffect(() => {
    if (isMobile) {
      setDesktopOpen(false)
    }
  }, [isMobile])

  // ---- ref object (no callback => no TS2322) ----
  const headerRef = useRef<HTMLElement | null>(null)

  const rafId = useRef<number | null>(null)
  const abortScroll = useRef<(() => void) | null>(null)
  const prefersReduced = usePrefersReducedMotion()

  // ---- measure header height into state; keep fresh on resize/RO ----
  const [offsetTop, setOffsetTop] = useState(80)
  useEffect(() => {
    const measure = () => setOffsetTop(headerRef.current?.offsetHeight ?? 80)
    measure()

    const ro = headerRef.current ? new ResizeObserver(measure) : null
    if (headerRef.current && ro) ro.observe(headerRef.current)

    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('resize', measure)
      ro?.disconnect()
    }
  }, [])

  // Smooth, cancel-able scroll to Y
  const smoothScrollTo = (targetY: number) => {
    if (prefersReduced) {
      window.scrollTo(0, targetY)
      return
    }
    const startY = window.pageYOffset
    const distance = targetY - startY
    const duration = Math.min(Math.max(Math.abs(distance) / 1.5, 250), 900)
    const startTime = performance.now()

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const aborters: [keyof WindowEventMap, any, AddEventListenerOptions | boolean][] = [
      ['wheel', onAbort, { passive: true }],
      ['touchstart', onAbort, { passive: true }],
      ['keydown', onAbort, false],
    ]

    function onAbort() {
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
      cleanup()
    }
    function cleanup() {
      aborters.forEach(([t, h, o]) => window.removeEventListener(t, h, o))
      abortScroll.current = null
    }
    aborters.forEach(([t, h, o]) => window.addEventListener(t, h, o))
    abortScroll.current = onAbort

    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      const e = easeInOutCubic(p)
      window.scrollTo(0, startY + distance * e)
      if (p < 1) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        cleanup()
      }
    }
    rafId.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    return () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
      abortScroll.current?.()
    }
  }, [])

  // Scroll to a hash id with header offset
  const scrollToHash = (hash: string, push: boolean) => {
    const id = hash.replace('#', '')
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const y = window.pageYOffset + el.getBoundingClientRect().top - offsetTop
    smoothScrollTo(y)
    if (push && window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  // Handle initial hash and back/forward
  useEffect(() => {
    const jump = (replace = false) => {
      const h = window.location.hash
      if (h) {
        scrollToHash(h, !replace)
        if (replace) window.history.replaceState(null, '', h)
      }
    }
    jump(true)
    const onPop = () => jump(false)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [offsetTop, prefersReduced])

  // Build list of section ids we should observe (only for hash items)
  const sectionIds = useMemo(
    () => navItems.map(([, href]) => (href.startsWith('#') ? href.slice(1) : null)).filter(Boolean) as string[],
    []
  )

  // IntersectionObserver to set active hash
  useEffect(() => {
    if (sectionIds.length === 0) return
    const els = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (els.length === 0) return

    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length) {
          setActiveHash('#' + (visible[0].target as HTMLElement).id)
        } else {
          const y = window.scrollY + offsetTop + 1
          let last = ''
          for (const id of sectionIds) {
            const el = document.getElementById(id)
            if (el && el.offsetTop <= y) last = '#' + id
          }
          if (last) setActiveHash(last)
        }
      },
      {
        rootMargin: `-${offsetTop + 20}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [sectionIds, offsetTop])

  return (
    <div
      className={cn(
        'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns]',
        isDesktopOpen ? 'grid-cols-[theme(spacing.nav-width)_1fr]' : 'grid-cols-[0_1fr]'
      )}
    >
      {/* Desktop Sidebar */}
      <div className="relative overflow-x-hidden" id="sidebar-drawer">
        <nav
          id="navigation-sidebar-desktop"
          aria-hidden={!isDesktopOpen}
          className={cn('px-xs w-nav-width absolute right-0 top-0 mt-[187px] md:block', isDesktopOpen ? 'block' : 'hidden')}
          aria-label="Sidebar navigation"
        >
          <div className="fixed max-h-[calc(100svh-192px)] overflow-y-auto overflow-x-hidden pb-[46px]">
            <div className="animate-sidebarSlideInLeft w-[calc(var(--spacing-nav-width)-2*var(--spacing-xs))]">
              <ul className="text-nav-mobile space-y-0.5 font-bold md:text-nav-desktop">
                {navItems.map(([label, href], idx) => {
                  const isHash = href.startsWith('#')
                  const isActive = isHash && activeHash === href
                  return (
                    <li key={`desktop-${idx}-${href}`} className="group relative">
                      <div className="rounded-md justify-between items-center w-full relative">
                        <Link
                          href={href}
                          onClick={(e) => {
                            if (isHash) {
                              e.preventDefault()
                              scrollToHash(href, true)
                            }
                          }}
                          className={cn(
                            'transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm',
                            isActive ? 'text-primary-100' : undefined
                          )}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {label}
                        </Link>
                        <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-44"
                            width="10"
                            viewBox="0 0 10 16"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                            style={{ transform: 'rotate(270deg)' }}
                          >
                            <path
                              d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>

                        {/* active indicator pill (optional) */}
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-y-0 right-0 w-1 rounded-l-full bg-primary-44/20"
                          />
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <header
        ref={headerRef} // <- object ref, no return
        className="fixed top-0 left-0 right-0 z-[51] h-header-h bg-secondary-100 flex items-center px-sm md:px-md shadow-sm"
      >
        <div className="flex items-center space-x-3">
          {/* Profile card */}
          <Link href="/" className="relative flex space-x-3 cursor-pointer hover:scale-105 transition">
            <div className="bg-emerald-500 absolute bottom-0 left-12 rounded-full border-2 border-white h-4 w-4" />
            <div className="rounded-full overflow-hidden w-12 h-12">
              <Image src="/assets/favicon.png" alt="logo" width={100} height={100} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-sm font-semibold leading-none text-black">TullochStudio</h4>
              <h5 className="text-sm tracking-tight text-zinc-500">@R&D Engineer</h5>
            </div>
          </Link>

          {/* Desktop toggle - disabled on mobile */}
          <button
            type="button"
            onClick={() => !isMobile && setDesktopOpen(!isDesktopOpen)}
            disabled={isMobile}
            aria-controls="sidebar-drawer"
            aria-expanded={isDesktopOpen}
            aria-label="Toggle Sidebar"
            className={cn(
              "hidden md:block p-xs transition-colors duration-short ease-curve-a",
              isMobile 
                ? "text-gray-300 cursor-not-allowed" 
                : "text-primary-44 hover:text-primary-100"
            )}
          >
            {isDesktopOpen ? (
              <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM6.85424 5.05118C6.24907 5.10062 5.90138 5.19279 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4.19279 6.90138 4.10062 7.24907 4.05118 7.85424C4.00078 8.47108 4 9.26339 4 10.4V13.6C4 14.7366 4.00078 15.5289 4.05118 16.1458C4.10062 16.7509 4.19279 17.0986 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C5.90138 18.8072 6.24907 18.8994 6.85424 18.9488C7.47108 18.9992 8.26339 19 9.4 19H14.6C15.7366 19 16.5289 18.9992 17.1458 18.9488C17.7509 18.8994 18.0986 18.8072 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C19.8072 17.0986 19.8994 16.7509 19.9488 16.1458C19.9992 15.5289 20 14.7366 20 13.6V10.4C20 9.26339 19.9992 8.47108 19.9488 7.85424C19.8994 7.24907 19.8072 6.90138 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C18.0986 5.19279 17.7509 5.10062 17.1458 5.05118C16.5289 5.00078 15.7366 5 14.6 5H9.4C8.26339 5 7.47108 5.00078 6.85424 5.05118ZM7 7C7.55229 7 8 7.44772 8 8V16C8 16.5523 7.55229 17 7 17C6.44772 17 6 16.5523 6 16V8C6 7.44772 6.44772 7 7 7Z" fill="currentColor"></path>
              </svg>  
            ):(
              <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM6.85424 5.05118C6.24907 5.10062 5.90138 5.19279 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4.19279 6.90138 4.10062 7.24907 4.05118 7.85424C4.00078 8.47108 4 9.26339 4 10.4V13.6C4 14.7366 4.00078 15.5289 4.05118 16.1458C4.10062 16.7509 4.19279 17.0986 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C5.90138 18.8072 6.24907 18.8994 6.85424 18.9488C7.17922 18.9754 7.55292 18.9882 8 18.9943V5.0057C7.55292 5.01184 7.17922 5.02462 6.85424 5.05118ZM10 5V19H14.6C15.7366 19 16.5289 18.9992 17.1458 18.9488C17.7509 18.8994 18.0986 18.8072 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C19.8072 17.0986 19.8994 16.7509 19.9488 16.1458C19.9992 15.5289 20 14.7366 20 13.6V10.4C20 9.26339 19.9992 8.47108 19.9488 7.85424C19.8994 7.24907 19.8072 6.90138 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C18.0986 5.19279 17.7509 5.10062 17.1458 5.05118C16.5289 5.00078 15.7366 5 14.6 5H10Z" fill="currentColor"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Main Display Blog */}
      <div className="pt-header-h relative">
        <div>
          <main id="main" className="@container relative z-[1] outline-none">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}