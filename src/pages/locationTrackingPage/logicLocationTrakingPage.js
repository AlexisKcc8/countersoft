import { useState } from "react";
import { useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let urlCounters = "http://localhost:5000/counters";
let urlAssignedLocations = "http://localhost:5000/assignedLocations";
export const logicLocationTrakingPage = () => {
  const [assignedLocations, setAssignedLocations] = useState([]);
  const [counters, setCounters] = useState([]);
  const [locationSpecific, setLocationSpecific] = useState({});
  const [error, setError] = useState(null);
  let api = helpHttp();

  useEffect(() => {
    const getData = async () => {
      let jsonCounters = await api.get(urlCounters);
      let jsonAssignedLocations = await api.get(urlAssignedLocations);
      const allData = await Promise.allSettled([
        jsonCounters,
        jsonAssignedLocations,
      ]);
      setCounters(allData[0].value);
      setAssignedLocations(allData[1].value);
    };
    getData();
  }, [urlCounters, urlAssignedLocations]);

  const getSpecificLocation = (location) => {
    setLocationSpecific(location);
  };

  const updateCounter = (contador) => {
    let endpoint = `${urlAssignedLocations}/${locationSpecific.id}`;
    locationSpecific.assignedCounter = contador;
    let options = {
      body: locationSpecific,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = assignedLocations.map((el) =>
          el.id === locationSpecific.id ? locationSpecific : el
        );
        setAssignedLocations(newData);
      } else {
        setError(res);
      }
    });
  };

  const updateStatusCounting = (location) => {
    let endpoint = `${urlAssignedLocations}/${location.id}`;
    location.inCounting = false;
    let options = {
      body: location,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = assignedLocations.map((el) =>
          el.id === location.id ? location : el
        );
        setAssignedLocations(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteAssigned = (objectLocation) => {
    const { id, location, assignedCounter } = objectLocation;
    let message = `Estas seguro de eliminar la asignacion ${location} de ${assignedCounter}`;
    let isDelete = window.confirm(message);
    if (isDelete) {
      let endpoint = `${urlAssignedLocations}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = assignedLocations.filter((el) => el.id !== id);
          setAssignedLocations(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  return {
    assignedLocations,
    setAssignedLocations,
    deleteAssigned,
    getSpecificLocation,
    updateCounter,
    updateStatusCounting,
    counters,
    error,
  };
};
