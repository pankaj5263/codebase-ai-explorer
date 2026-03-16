import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { repoSchema } from "../vaidations/repoSchema"
import { apiClient } from "../services/apiClient"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function RepoInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(repoSchema),
  })

  const onSubmit = async (data) => {
    await apiClient.post("/index", data)
    alert("Repository indexed successfully")
  }

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-lg font-semibold">
        Index GitHub Repository
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-3"
      >
        <Input
          placeholder="https://github.com/user/repo"
          {...register("repoUrl")}
        />

        <Button disabled={isSubmitting}>
          {isSubmitting ? "Indexing..." : "Index Repository"}
        </Button>
      </form>

      {errors.repoUrl && (
        <p className="text-red-500 text-sm">
          {errors.repoUrl.message}
        </p>
      )}
    </Card>
  )
}