import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage("")
  }

  return (
    <div className="flex gap-3">
      <Textarea
        placeholder="Ask a question about the repository..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button
        onClick={handleSend}
        disabled={loading}
      >
        Send
      </Button>
    </div>
  )
}