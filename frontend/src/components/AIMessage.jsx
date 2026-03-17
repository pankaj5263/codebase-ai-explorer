import { useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import copy from "copy-to-clipboard"
import "highlight.js/styles/github.css"

function CodeBlock({ inline, className, children }) {
  const [copied, setCopied] = useState(false)

  const code = String(children || "").replace(/\n$/, "")

  if (inline) {
    return (
      <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
        {code}
      </code>
    )
  }

  const handleCopy = () => {
    copy(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative group">
      
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
        <code className={className}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default function AIMessage({ message }) {
  return (
    <div className="flex justify-start">
      <div className="bg-white border rounded-lg px-4 py-3 max-w-3xl w-full">

        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              code: CodeBlock,
            }}
          >
            {message || ""}
          </ReactMarkdown>
        </div>

      </div>
    </div>
  )
}