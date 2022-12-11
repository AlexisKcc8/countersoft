import app from "./app.js";
import {
  createConnectionToDbAssignedLocations,
  createConnectionToDbCounters,
  createConnectionToDbLocations,
} from "./database.js";
createConnectionToDbCounters();
createConnectionToDbAssignedLocations();
createConnectionToDbLocations();
app.listen(5000);
console.log("Server is running on port 5000");
