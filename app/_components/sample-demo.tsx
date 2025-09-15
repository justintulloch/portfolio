
import { CodeEditor } from '@/components/ui/shadcn-io/code-editor ';
import { Code } from 'lucide-react';

export const CodeEditorRust = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* Intro */}
      <p className="text-sm text-muted-foreground mb-3">
        A compact Rust snippet showing how you’d isolate an inference bottleneck inside a Rust Silo:
      </p>

      <div className="mx-auto w-full max-w-screen-lg">
        <CodeEditor
          cursor
          // Mobile-first height, scale up at breakpoints
          className="
            w-full
            h-64
            sm:h-80
            md:h-[420px]
            lg:h-[480px]
            border rounded-xl shadow-md overflow-hidden
            bg-white/10
          "
          lang="rust"
          title="fast_infer.rs"
          icon={<Code className="text-muted-foreground" />}
          duration={15}
          delay={0.5}
          copyButton
        >
{`// fast_infer.rs — Rust Silo
use tch::{CModule, Tensor};

pub struct InferenceEngine {
    model: CModule,
}

impl InferenceEngine {
    pub fn new(model_path: &str) -> Self {
        let model = CModule::load(model_path).expect("Failed to load model");
        Self { model }
    }

    pub fn predict(&self, input: &Tensor) -> Tensor {
        self.model.forward_ts(&[input]).unwrap()
    }
}
`}
        </CodeEditor>

        {/* Footer note */}
        <p className="mt-3 text-sm text-muted-foreground">
          ⚙️ This isolates your inference logic into a compiled Rust module callable from Python—slashing latency while preserving architecture integrity.
        </p>
      </div>
    </section>
  );
};


export const CodeEditorPython = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* Intro */}
      <p className="text-sm text-muted-foreground mb-3">
       A Python example showing how behavior is defined by constraint and implicit design—not branching logic:
      </p>

      <div className="mx-auto w-full max-w-screen-lg">
        <CodeEditor
          cursor
          // Mobile-first height, scale up at breakpoints
          className="
            w-full
            h-64
            sm:h-80
            md:h-[420px]
            lg:h-[480px]
            border rounded-xl shadow-md overflow-hidden
            bg-white/10
          "
          lang="python"
          title="telemetry_router.py"
          icon={<Code className="text-muted-foreground" />}
          duration={15}
          delay={0.5}
          copyButton
        >
{`# telemetry_router.py - Negative Space Pattern


def route_packet(packet):
    if not packet.valid:
        return  # Invalid packets are silent failures

    if packet.type not in HANDLED_TYPES:
        return  # Unhandled packets are intentionally dropped

    handler = HANDLERS.get(packet.type)
    if handler:
        handler(packet)

`}
        </CodeEditor>

        {/* Footer note */}
        <p className="mt-3 text-sm text-muted-foreground">
         🧩 Notice what isn’t there: no logging noise, no else-branches, no fallbacks. The structure defines  what’s  allowed—everything else is void.
        </p>
      </div>
    </section>
  );
};


