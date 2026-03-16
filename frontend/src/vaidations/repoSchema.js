import { z } from "zod"

export const repoSchema = z.object({
  repoUrl: z
    .string()
    .url("Must be a valid URL")
    .includes("github.com", {
      message: "Must be a GitHub repository URL",
    }),
})