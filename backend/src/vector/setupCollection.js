import client from "../config/qdrantClient.js";
import { env } from "../config/env.js";

async function setupCollection() {

  const collections = await client.getCollections();

  const exists = collections.collections.some(
    (c) => c.name === env.QDRANT_COLLECTION
  );

  if (exists) {
    console.log("Collection already exists");
    return;
  }

  await client.createCollection(env.QDRANT_COLLECTION, {
    vectors: {
      size: 384,
      distance: "Cosine"
    }
  });

  console.log("Collection created:", env.QDRANT_COLLECTION);
}

setupCollection();