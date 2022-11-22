import express from "express";
import counterRoutes from "./routes/counters.js";
import cors from "cors";
import assignedLocationsRoutes from "./routes/assignedLocations.js";
const app = express();

//midleddware para leer json y mandarlos en el body
app.use(express.json());
const whiteList = ["http://localhost:5000", "http://127.0.0.1:5173"];
app.use(cors({ origin: whiteList }));
app.use(assignedLocationsRoutes);

export default app;
