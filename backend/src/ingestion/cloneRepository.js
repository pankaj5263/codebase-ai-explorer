import simpleGit from "simple-git";
import fs from "fs-extra";
import path from "path";

const git = simpleGit();

export async function cloneRepository(repoUrl) {
  const repoName = repoUrl.split("/").pop().replace(".git", "");
  const repoPath = path.join(process.cwd(), "repos", repoName);

  if (await fs.pathExists(repoPath)) {
    console.log("Repository already cloned.");
    return repoPath;
  }

  console.log("Cloning repository...");

  await git.clone(repoUrl, repoPath);

  return repoPath;
}