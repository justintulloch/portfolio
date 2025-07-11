interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
  code?: string
}

export function ChatMessage({ role, content, code }: ChatMessageProps) {
  const isUser = role === "user"

  return (
    <div className={`p-4 flex w-full justify-center rounded-lg py-6 ${isUser ? "bg-gray-100" : "bg-blue-50"}`}>
      <div className="flex w-full max-w-4xl flex-col items-start">
        <div className="w-full">
          <div className="text-gray-600 mb-2 font-bold capitalize">{role === "assistant" ? "ChatGPT" : "User"}</div>
          <div className="text-gray-900">{content}</div>
          {code && (
            <div className="mt-4">
              <pre className="bg-gray-800 text-gray-100 block w-full whitespace-pre-wrap rounded-sm px-6 py-4 overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
