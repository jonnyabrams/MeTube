import express from "express";

import { addComment, getComments } from "../controllers/comment.js";

const router = express.Router();

// add comment
router.post("/", addComment);

// get comments
router.get("/:videoId", getComments);

export default router;
