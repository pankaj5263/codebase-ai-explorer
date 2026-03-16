import { QdrantClient } from "@qdrant/js-client-rest";
import { env } from "./env.js";

const client = new QdrantClient({
  url: env.QDRANT_URL,
  checkCompatibility: false
});

export default client;