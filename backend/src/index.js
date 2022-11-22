import app from "./app.js";
import { createConnection } from "./database.js";
createConnection();
app.listen(5000);
console.log("Server is running on port 5000");
