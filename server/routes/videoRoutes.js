import express from "express";

import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  trend,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/tags", getByTag);
router.get("/search", search);

export default router;
