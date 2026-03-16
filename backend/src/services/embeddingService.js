import { pipeline } from "@xenova/transformers";

let embedder;

export async function getEmbedder() {
  if (!embedder) {
    embedder = await pipeline(
      "feature-extraction",
      "Xenova/bge-small-en"
    );
  }

  return embedder;
}

export async function generateEmbedding(text) {

  const model = await getEmbedder();

  // limit input length to avoid token overflow
  const trimmedText = text.slice(0, 1500);

  const result = await model(trimmedText, {
    pooling: "mean",
    normalize: true
  });

  return Array.from(result.data);
}