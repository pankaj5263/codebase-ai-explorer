import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import askRoute from "./api/askRoute.js";
import indexRoute from "./api/indexRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", indexRoute);
app.use("/api", askRoute);


app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Codebase AI Explorer backend running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});