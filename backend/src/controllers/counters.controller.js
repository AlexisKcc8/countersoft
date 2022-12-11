import { getConnectionToDbCounters } from "../database.js";
import { iteratorBodyRequestArray } from "../helpers/helpers.js";

export const getCounters = (req, res) => {
  const counters = getConnectionToDbCounters().data.counters;
  res.json(counters);
};
export const addCounters = async (req, res) => {
  try {
    const db = getConnectionToDbCounters();
    if (db.data.counters.length === 0) {
      db.data.counters = iteratorBodyRequestArray(req.body);
    } else {
      db.data.counters.splice(0, db.data.counters.length);
      db.data.counters = iteratorBodyRequestArray(req.body);
      console.log("nuevos datos añadidos");
    }

    await db.write();
    res.json({
      status: 200,
      statusMessage: "Counters added successfully",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
