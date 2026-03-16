import { askCodebase } from "../rag/askCodebase.js";

async function run() {

  const question = "Explain what the server.js and client.js file do";

  const answer = await askCodebase(question);

  console.log("\nAI Answer:\n");
  console.log(answer);

}

run();