import { cloneRepository } from "../ingestion/cloneRepository.js";
import { scanRepository } from "../ingestion/scanRepository.js";
import { filterCodeFiles } from "../ingestion/filterCodeFiles.js";
import { chunkCode } from "../chunking/chunkCode.js";

async function run() {

  const repoUrl = "https://github.com/facebook/react";

  const repoPath = await cloneRepository(repoUrl);

  const files = scanRepository(repoPath);

  const codeFiles = filterCodeFiles(files);

  const chunks = chunkCode(codeFiles[0]);

  console.log("First file:", codeFiles[0]);
  console.log("Chunks created:", chunks.length);

}

run();