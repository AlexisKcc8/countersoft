import { Router } from "express";
import {
  getAssignedLocations,
  getAssignedLocation,
  createAssignedLocations,
  updateAssignedLocation,
  deleteAssignedLocation,
  count,
} from "../controllers/assignedLocations.controller.js";
const router = Router();

router.get("/assignedLocations", getAssignedLocations);
router.get("/assignedLocations/:id", getAssignedLocation);
router.post("/assignedLocations", createAssignedLocations);
router.put("/assignedLocations/:id", updateAssignedLocation);
router.delete("/assignedLocations/:id", deleteAssignedLocation);
router.get("/assignedLocations/count", count);

export default router;
