interface Citation {
  id: string
  text: string
  url?: string
}

interface CitationSectionProps {
  citations: Citation[]
}

export function ResumeSection({ citations }: CitationSectionProps) {
  return (
    <section className="max-w-container scroll-mt-header-h w-full">
      <div className="bg-gray-50 py-8 md:py-xl py-md px-xs grid grid-cols-12 rounded-md">
        <div className="gap-lg col-span-12 flex flex-col md:col-span-6 md:col-start-4">
          {/* Tags */}
          <section className="w-full">
            <ul className="gap-3xs flex flex-wrap">
              <li>
                <a
                  className="text-sm px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl transition-colors"
                  href="/news/?tags=chatgpt"
                >
                  ChatGPT
                </a>
              </li>
              <li>
                <a
                  className="text-sm px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl transition-colors"
                  href="/news/?tags=2022"
                >
                  2022
                </a>
              </li>
            </ul>
          </section>

          {/* References */}
          <div>
            <h2 className="text-sm text-gray-600 mb-3">References</h2>
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

          {/* Author */}
          <div>
            <h2 className="text-sm text-gray-600 mb-3">Author</h2>
            <a className="text-sm hover:text-gray-600 underline transition-colors" href="/news/?author=openai#results">
              OpenAI
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
