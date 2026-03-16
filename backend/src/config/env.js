import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
  QDRANT_URL: process.env.QDRANT_URL || "http://localhost:6333",
  QDRANT_COLLECTION: "code_chunks"
}