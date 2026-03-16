import express from "express";
import { indexRepository } from "../services/indexRepository.js";

const router = express.Router();

router.post("/index", async (req, res) => {
  try {

    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({
        error: "repoUrl is required"
      });
    }

    console.log("Indexing repo:", repoUrl);

    await indexRepository(repoUrl);

    res.json({
      message: "Repository indexed successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to index repository"
    });

  }
});

export default router;