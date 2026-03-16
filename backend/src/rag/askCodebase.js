import groq from "../config/groqClient.js";
import { searchCode } from "./searchCode.js";
import { buildContext } from "./buildContext.js";

export async function askCodebase(question) {

  const chunks = await searchCode(question);

  const context = buildContext(chunks);

  const prompt = `
You are a senior software engineer.

Answer the question using the provided code context.

Code Context:
${context}

Question:
${question}
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