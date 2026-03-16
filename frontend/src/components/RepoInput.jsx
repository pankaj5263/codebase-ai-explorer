import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { repoSchema } from "../vaidations/repoSchema"
import { apiClient } from "../services/apiClient"

export default function RepoInput() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(repoSchema),
  })

  const onSubmit = async (data) => {
    try {
      await apiClient.post("/index", data)
      alert("Repository indexed successfully")
    } catch (err) {
      console.error(err)
      alert("Indexing failed")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="max-w-4xl mx-auto flex gap-3">

        <input
          {...register("repoUrl")}
          placeholder="https://github.com/user/repo"
          className="flex-1 border rounded-md px-4 py-2"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white px-4 rounded-md"
        >
          {isSubmitting ? "Indexing..." : "Add Repository"}
        </button>

      </div>

      {errors.repoUrl && (
        <p className="text-red-500 text-sm mt-2">
          {errors.repoUrl.message}
        </p>
      )}

    </form>
  )
}