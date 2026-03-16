import express from "express";
import { askCodebase } from "../rag/askCodebase.js";

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {

    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        error: "Question is required"
      });
    }

    const answer = await askCodebase(question);

    res.json({
      question,
      answer
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to query codebase"
    });

  }
});

export default router;