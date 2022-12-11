import { Router } from "express";
import {
  getLocations,
  addLocations,
} from "../controllers/locations.controller.js";
const router = Router();

router.get("/locations", getLocations);
router.post("/locations", addLocations);
export default router;
