import { useState } from "react"
import RepoInput from "../components/RepoInput"
import ChatInput from "../components/ChatInput"
import ChatMessage from "../components/ChatMessage"
import { apiClient } from "../services/apiClient"

export default function ChatPage() {
  const [messages, setMessages] = useState([])

  const askQuestion = async (question) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
    ])

    const res = await apiClient.post("/ask", {
      question,
    })

    setMessages((prev) => [
      ...prev,
      { role: "ai", content: res.data.answer },
    ])
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        AI Codebase Assistant
      </h1>

      <RepoInput />

      <div className="space-y-4 border p-4 rounded h-[400px] overflow-y-auto">
        {messages.map((m, i) => (
          <ChatMessage
            key={i}
            role={m.role}
            content={m.content}
          />
        ))}
      </div>

      <ChatInput onSend={askQuestion} />
    </div>
  )
}