import { cloneRepository } from "../ingestion/cloneRepository.js";
import { scanRepository } from "../ingestion/scanRepository.js";
import { filterCodeFiles } from "../ingestion/filterCodeFiles.js";
import { chunkCode } from "../chunking/chunkCode.js";
import { generateEmbedding } from "./embeddingService.js";
import { storeEmbedding } from "../vector/storeEmbedding.js";

export async function indexRepository(repoUrl) {

  const repoPath = await cloneRepository(repoUrl);

  const files = scanRepository(repoPath);
  console.log(files);

  const codeFiles = filterCodeFiles(files);
  console.log("codeFiles", codeFiles);

  let id = 1;

  for (const file of codeFiles) {

    const chunks = chunkCode(file);
    console.log("chunks", chunks);

    for (const chunk of chunks) {

      const embedding = await generateEmbedding(chunk.content);

      await storeEmbedding(id++, embedding, chunk);

    }

  }

  console.log("Repository indexed successfully");

}