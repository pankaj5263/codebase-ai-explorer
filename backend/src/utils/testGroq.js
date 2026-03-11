import groq from "../config/groqClient.js";

async function testGroq() {
  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      {
        role: "user",
        content: "Explain what a vector database is in one paragraph."
      }
    ]
  });

  console.log(response.choices[0].message.content);
}

testGroq();