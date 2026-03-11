import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("Environment variables loaded", process.env.PORT, process.env.GROQ_API_KEY);
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});