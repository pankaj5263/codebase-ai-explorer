export default function UserMessage({ message }) {
  return (
    <div className="flex justify-end">
      <div className="bg-black text-white px-4 py-2 rounded-xl max-w-xl">
        {message}
      </div>
    </div>
  )
}