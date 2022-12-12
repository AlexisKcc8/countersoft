import { Router } from "express";
import {
  getLocations,
  addLocations,
  deleteLocation,
} from "../controllers/locations.controller.js";
const router = Router();

router.get("/locations", getLocations);
router.post("/locations", addLocations);
router.delete("/locations/:id", deleteLocation);
export default router;
