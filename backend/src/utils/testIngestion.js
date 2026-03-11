import { cloneRepository } from "../ingestion/cloneRepository.js";
import { scanRepository } from "../ingestion/scanRepository.js";
import { filterCodeFiles } from "../ingestion/filterCodeFiles.js";

async function run() {
  const repoUrl = "https://github.com/pankaj5263/typescript-todo-list";

  const repoPath = await cloneRepository(repoUrl);

  const files = scanRepository(repoPath);

  const codeFiles = filterCodeFiles(files);

  console.log("Total files:", files.length);
  console.log("Code files:", codeFiles.length);
}

run();