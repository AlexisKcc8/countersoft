import express from "express";
import counterRoutes from "./routes/counters.js";
import assignedLocationsRoutes from "./routes/assignedLocations.js";
const app = express();

//midleddware para leer json y mandarlos en el body
app.use(express.json());
app.use(assignedLocationsRoutes);

export default app;
