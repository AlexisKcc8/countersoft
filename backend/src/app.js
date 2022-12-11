import express from "express";
import cors from "cors";
import counterRoutes from "./routes/counters.js";
import assignedLocationsRoutes from "./routes/assignedLocations.js";
import locationsRoutes from "./routes/locations.js";
const app = express();

//?midleddware para leer json y mandarlos en el body
app.use(express.json());
//? midleddware para permitir el uso de cors en estos dominios
const whiteList = ["http://localhost:5000", "http://127.0.0.1:5173"];
app.use(cors({ origin: whiteList }));
//* midleddware para el uso de endpoints de nuestra api
app.use(counterRoutes);
app.use(locationsRoutes);
app.use(assignedLocationsRoutes);

export default app;
