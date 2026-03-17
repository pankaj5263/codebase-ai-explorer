import AIMessage from "./AIMessage"

export default function ChatMessage({ role, content }) {
  const isUser = role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-3xl w-full rounded-lg px-4 py-3 text-sm leading-relaxed
        ${isUser ? "bg-black text-white" : ""}
        `}
      >
        {isUser ? content : <AIMessage message={content} />}
      </div>
    </div>
  )
}