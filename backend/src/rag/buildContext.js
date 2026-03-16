export function buildContext(chunks) {

  return chunks
    .map(
      (chunk) => `
File: ${chunk.filePath}
Lines: ${chunk.startLine}-${chunk.endLine}

${chunk.content}
`
    )
    .join("\n---\n");

}