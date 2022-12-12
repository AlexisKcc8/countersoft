import { useState } from "react";
import { useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { logicLocationTrakingPage } from "../locationTrackingPage/logicLocationTrakingPage";
let urlCounters = "http://localhost:5000/counters";
let urlLocations = "http://localhost:5000/locations";
let urlAssignedLocations = "http://localhost:5000/assignedLocations";
export const logicLocationAllocation = () => {
  const [counters, setCounters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [counter, setCounter] = useState("");
  const [error, setError] = useState(null);
  const { assignedLocations, setAssignedLocations } =
    logicLocationTrakingPage();
  let api = helpHttp();

  useEffect(() => {
    const getData = async () => {
      let jsonCounters = await api.get(urlCounters);
      let jsonLocations = await api.get(urlLocations);
      const allData = await Promise.allSettled([jsonCounters, jsonLocations]);
      setCounters(allData[0].value);
      setLocations(allData[1].value);
    };
    getData();
  }, [urlCounters, urlLocations]);

  const addAssignment = (specificLocation) => {
    let id = specificLocation.id;
    const newAssignedLocation = {
      inCounting: true,
      assignedCounter: counter,
      ...specificLocation,
    };
    let options = {
      body: newAssignedLocation,
      headers: { "content-type": "application/json" },
    };
    api.post(urlAssignedLocations, options).then((res) => {
      if (!res.err) {
        setAssignedLocations([...assignedLocations, res]);
        alert("Locacion asignada con exito!!!");
        let urlLocationWithId = `${urlLocations}/${id}`;
        deleteAsignedLocation(urlLocationWithId, id);
      } else {
        setError(res);
      }
    });
  };

  const deleteAsignedLocation = (url, id) => {
    let options = {
      headers: { "content-type": "application/json" },
    };

    api.del(url, options).then((res) => {
      if (!res.err) {
        let newData = locations.filter((el) => el.id !== id);
        setLocations(newData);
      } else {
        setError(res);
      }
    });
  };

  return { counters, locations, setCounter, counter, error, addAssignment };
};
