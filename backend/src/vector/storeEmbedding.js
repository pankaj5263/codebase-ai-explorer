import client from "../config/qdrantClient.js";
import { env } from "../config/env.js";

export async function storeEmbedding(id, vector, payload) {
  console.log("Storing vector:", id);

  await client.upsert(env.QDRANT_COLLECTION, {
    points: [
      {
        id,
        vector,
        payload
      }
    ]
  });

}