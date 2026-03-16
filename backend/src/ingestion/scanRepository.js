import { globSync } from "glob";

export function scanRepository(repoPath) {
  const files = globSync(`${repoPath}/**/*.*`, {
    ignore: ["**/node_modules/**", "**/.git/**"],
  });

  return files;
}