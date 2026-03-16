import UserMessage from "./UserMessage"
import AIMessage from "./AIMessage"

export default function ChatMessage({ role, content }) {
  if (role === "user") {
    return <UserMessage message={content} />
  }

  return <AIMessage message={content} />
}