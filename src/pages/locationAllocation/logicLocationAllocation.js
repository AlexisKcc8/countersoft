import { useState } from "react";
import { useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let urlCounters = "http://localhost:5000/counters";
let urlLocations = "http://localhost:5000/locations";
export const logicLocationAllocation = () => {
  const [counters, setCounters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [counter, setCounter] = useState("Kley");
  const [error, setError] = useState(null);
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

  return { counters, locations, setCounter, counter, error };
};
