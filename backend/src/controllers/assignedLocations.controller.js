import { getConnection } from "../database.js";
import { v4 } from "uuid";

export const getAssignedLocations = (req, res) => {
  const assignedLocations = getConnection().data.assignedLocations;
  res.json(assignedLocations);
};
export const getAssignedLocation = (req, res) => {
  const assignedLocation = getConnection().data.assignedLocations.find(
    (t) => t.id === req.params.id
  );
  if (!assignedLocation) res.sendStatus(404);
  res.json(assignedLocation);
};
export const createAssignedLocations = async (req, res) => {
  const newAssignedLocation = {
    id: v4(),
    ...req.body,
  };
  try {
    const db = getConnection();
    db.data.assignedLocations.push(newAssignedLocation);
    await db.write();

    res.json(newAssignedLocation);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const updateAssignedLocation = async (req, res) => {
  const { inCounting, textInCounting, assignedCounter } = req.body;

  try {
    const db = getConnection();
    const assignedFound = db.data.assignedLocations.find(
      (t) => t.id === req.params.id
    );
    if (!assignedFound) return res.sendStatus(404);

    assignedFound.inCounting = inCounting;
    assignedFound.textInCounting = textInCounting;
    assignedFound.assignedCounter = assignedCounter;

    db.data.assignedLocations.map((t) =>
      t.id === req.params.id ? assignedFound : t
    );

    await db.write();

    res.json(assignedFound);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const deleteAssignedLocation = async (req, res) => {
  const db = getConnection();
  const assignedFound = db.data.assignedLocations.find(
    (t) => t.id === req.params.id
  );
  if (!assignedFound) res.sendStatus(404);
  console.log(assignedFound);

  const newTasks = db.data.assignedLocations.filter(
    (t) => t.id !== req.params.id
  );
  db.data.assignedLocations = newTasks;
  await db.write();

  return res.json(assignedFound);
};
export const count = (req, res) => {
  const totalAssigned = getConnection().data.assignedLocations.length;
  res.json(totalAssigned);
};
