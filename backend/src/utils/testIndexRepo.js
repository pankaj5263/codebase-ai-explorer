import { indexRepository } from "../services/indexRepository.js";

async function run() {

  const repoUrl =
    "https://github.com/pankaj5263/node-broadcast-Server";

  await indexRepository(repoUrl);

}

run();