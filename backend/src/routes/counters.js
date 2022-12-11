import { Router } from "express";
import {
  getCounters,
  addCounters,
} from "../controllers/counters.controller.js";
const router = Router();

router.get("/counters", getCounters);
router.post("/counters", addCounters);
export default router;
