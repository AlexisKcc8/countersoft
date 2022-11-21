//*json file va a permitir crear el archivo inicial donde se guardaran los datos y low nos va a permitir interactuar con este archivo
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
//?dirname extrae la direccion actual del archivo que se esta ejecutando
//? fileURLToPath lo que hace es convertir un import a una ruta que dirname pueda entender

let db;
//? obtenemos la ruta absoluta del archivo que se esta ejecutando ahora
const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnection() {
  const fileDb = join(__dirname, "../db.json");
  const adapter = new JSONFile(fileDb);

  db = new Low(adapter);
  //leemos
  await db.read();
  //asignamos
  db.data ||= { assignedLocations: [] };
  //escribimos
  await db.write();
}

export const getConnection = () => db;
