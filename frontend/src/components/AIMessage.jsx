export default function AIMessage({ message }) {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-100 px-4 py-2 rounded-xl max-w-xl whitespace-pre-wrap">
        {message}
      </div>
    </div>
  )
}