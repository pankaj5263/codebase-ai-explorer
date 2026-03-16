import { useMutation } from "@tanstack/react-query"
import { apiClient } from "../services/apiClient"

export const useAskQuestion = () => {
  return useMutation({
    mutationFn: async (question) => {
      const { data } = await apiClient.post("/ask", {
        question,
      })
      return data
    },
  })
}