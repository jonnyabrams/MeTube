import express from "express";

import {
  addVideo,
  addView,
  getVideo,
  random,
  trend,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);

export default router;
