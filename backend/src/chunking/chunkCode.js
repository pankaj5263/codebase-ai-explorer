import fs from "fs";

export function chunkCode(filePath, chunkSize = 80) {
  const content = fs.readFileSync(filePath, "utf-8");

  const lines = content.split("\n");

  const chunks = [];

  for (let i = 0; i < lines.length; i += chunkSize) {
    const chunk = lines.slice(i, i + chunkSize).join("\n");

    chunks.push({
      filePath,
      startLine: i + 1,
      endLine: Math.min(i + chunkSize, lines.length),
      content: chunk
    });
  }

  return chunks;
}