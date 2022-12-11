import { getConnectionToDbLocations } from "../database.js";
import { iteratorBodyRequestArray } from "../helpers/helpers.js";
export const getLocations = (req, res) => {
  const locations = getConnectionToDbLocations().data.locations;
  res.json(locations);
};
export const addLocations = async (req, res) => {
  try {
    const db = getConnectionToDbLocations();
    if (db.data.locations.length === 0) {
      db.data.locations = iteratorBodyRequestArray(req.body);
    } else {
      db.data.locations.splice(0, db.data.locations.length);
      db.data.locations = iteratorBodyRequestArray(req.body);
      console.log("nuevos datos añadidos");
    }

    await db.write();
    res.json({
      status: 200,
      statusMessage: "Locations added successfully",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
