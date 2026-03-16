import { useState } from "react"

export default function ChatInput({ onSend }) {
  const [question, setQuestion] = useState("")

  const handleSend = () => {
    if (!question.trim()) return
    onSend(question)
    setQuestion("")
  }

  return (
    <div className="flex items-center gap-3 max-w-4xl mx-auto">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about the repository..."
        className="flex-1 border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />

      <button
        onClick={handleSend}
        className="bg-black text-white px-6 py-3 rounded-md"
      >
        Send
      </button>
    </div>
  )
}