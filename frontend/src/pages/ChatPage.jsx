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

    const res = await apiClient.post("/ask", { question })

    setMessages((prev) => [
      ...prev,
      { role: "ai", content: res?.data?.answer || "No response" },
    ])
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">

      {/* Header */}
      <header className="border-b bg-white px-8 py-4">
        <h1 className="text-xl font-semibold">
          AI Codebase Assistant
        </h1>
      </header>

      {/* Repo Input */}
      <div className="px-8 py-4 bg-white border-b">
        <RepoInput />
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center mt-20">
            Ask a question about the repository
          </div>
        )}

        {messages.map((m, i) => (
          <ChatMessage
            key={i}
            role={m.role}
            content={m.content}
          />
        ))}
      </div>

      {/* Input */}
      <div className="border-t bg-white px-8 py-4">
        <ChatInput onSend={askQuestion} />
      </div>

    </div>
  )
}