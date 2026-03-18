import groq from "../config/groqClient.js";
import { searchCode } from "./searchCode.js";
import { buildContext } from "./buildContext.js";

export async function askCodebase(question) {

  const chunks = await searchCode(question);

  const context = buildContext(chunks);

  const prompt = `
You are a senior software engineer with strong expertise in large-scale codebases, debugging, and code reviews.

Your task is to answer the question strictly using the provided code context. Do not make assumptions beyond the given code.

Code Context:
${context}

Question:
${question}

Instructions:
- Be precise and technical. Avoid generic explanations.
- If relevant, reference specific functions, variables, or files from the context.
- Explain the reasoning behind your answer.
- If suggesting changes, provide exact code modifications (diff-style or snippets).
- If the context is insufficient, clearly state what is missing instead of guessing.
- Highlight potential bugs, edge cases, or improvements if applicable.
- Keep the answer concise but complete.

Output Format:
1. **Answer**
`;

  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return response.choices[0].message.content;

}