import { cn } from "@/lib/utils ";

interface Citation {
  id: string
  text: string
  url?: string
}

interface CitationSectionProps {
  citations: Citation[]
}

interface Skill {
  name: string;
  highlighted?: boolean;
  href?: string;
}

interface SkillsListProps {
  skills: Skill[];
  className?: string;
}

// Skills data array
const skills: Skill[] = [
  { name: "Python", highlighted: true },
  { name: "C++", highlighted: false },
  { name: "Rust", highlighted: false },
  { name: "CUDA", highlighted: false },
  { name: "Kubernetes", highlighted: false },
  { name: "Ray/Slurm", highlighted: false },
  { name: "AWS", highlighted: false },
  { name: "REST", highlighted: false },
  { name: "Prometheus", highlighted: false },
  { name: "SLO/MTTR", highlighted: false },
  { name: "Canaries", highlighted: false },
  { name: "On-call/Incident Reviews", highlighted: false },
  { name: "PyTorch", highlighted: true },
  { name: "TorchScript/ONNX", highlighted: false },
  { name: "Quantization", highlighted: false },
  { name: "On-device Inference", highlighted: false },
  { name: "TensorRT Readiness", highlighted: false },
  { name: "Computer Architecture/HPC", highlighted: false },
  { name: "OSS Contributions", highlighted: false },
];




function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul className={cn("gap-3xs flex flex-wrap", className)}>
      {skills.map((skill, index) => (
        <li key={index}>
          {skill.href ? (
            <a
              className={cn(
                "text-sm px-3 py-2 rounded-xl transition-colors inline-block",
                skill.highlighted
                  ? "bg-blue-200 hover:bg-blue-300 font-semibold text-blue-900"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
              href={skill.href}
            >
              {skill.name}
            </a>
          ) : (
            <span
              className={cn(
                "text-sm px-3 py-2 rounded-xl transition-colors inline-block",
                skill.highlighted
                  ? "bg-blue-200 hover:bg-blue-300 font-semibold text-blue-900"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
            >
              {skill.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}



export function ResumeSection({ citations }: CitationSectionProps) {
  return (
 <section className="max-w-container scroll-mt-header-h w-full">
      <div className="bg-gray-50 py-8 md:py-xl py-md px-xs grid grid-cols-12 rounded-md">
        <div className="gap-lg col-span-12 flex flex-col md:col-span-6 md:col-start-4">
          
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Justin L. Tulloch</h1>
            <p className="text-lg text-gray-700 mb-2">Software Engineer – Machine Learning</p>
            <p className="text-sm text-gray-600">San Bernardino, CA | tkljustin@outlook.com</p>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://github.com/justintulloch" 
                className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/justin-kinard-tulloch" 
                className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h2 className="text-sm text-gray-600 mb-3">ML Performance Engineer Summary</h2>
            <div className="space-y-2 text-sm">
              <p>Performance engineer who ships optimized PyTorch models, cutting size by 74% via quantization.</p>
              <p>Architected robust Python CI/CD pipelines and backend services for large-scale, automated model testing.</p>
              <p>Shipped AI-powered performance/regression tests that surfaced risk early and prevented production regressions.</p>
              <p>Partnered with several teams to set SLOs, trace tests, and keep p99 predictable across services.</p>
            </div>
          </div>

          {/* Technical Skills */}
          <section className="w-full mb-6">
            <h2 className="text-sm text-gray-600 mb-3">Technical Skills</h2>
            <SkillsList skills={skills} />
          </section>

          {/* Experience & Projects */}
          <div className="mb-6">
            <h2 className="text-sm text-gray-600 mb-3">Work Experience & Technical Contributions</h2>
            <div className="prose max-w-none">
              <ol className="grid grid-cols-1 gap-4 px-0 mb-0">
                {citations.map((citation, index) => (
                  <li key={citation.id} className="grid grid-cols-[auto,1fr] gap-4 mb-3">
                    <span className="text-sm text-gray-500 w-4">{index + 1}</span>
                    <span className="mb-0">
                      <p className="text-sm mb-2 break-words leading-relaxed">
                        {citation.url ? (
                          <a
                            href={citation.url}
                            className="text-blue-600 hover:text-blue-800 underline transition-colors"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {citation.text}
                          </a>
                        ) : (
                          citation.text
                        )}
                      </p>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-sm text-gray-600 mb-3">Education</h2>
            <div className="text-sm">
              <p className="font-medium">Penn State University</p>
              <p>B.S. in Computer Science (on pause; full-time engineering focus since 2022)</p>
              <p className="text-gray-600">GPA: 3.5 | Middletown, PA | Expected May 2023</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm text-gray-600 mb-3">Contact</h2>
            <a 
              className="text-sm hover:text-gray-600 underline transition-colors" 
              href="mailto:tkljustin@outlook.com"
            >
              tkljustin@outlook.com
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}


