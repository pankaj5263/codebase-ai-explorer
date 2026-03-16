import client from "../config/qdrantClient.js";
import { env } from "../config/env.js";
import { generateEmbedding } from "../services/embeddingService.js";

export async function searchCode(query, limit = 5) {

  const embedding = await generateEmbedding(query);

  const result = await client.search(env.QDRANT_COLLECTION, {
    vector: embedding,
    limit
  });

  return result.map((item) => item.payload);
}