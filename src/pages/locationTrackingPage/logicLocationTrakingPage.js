import { useState } from "react";
import { useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let url = "http://localhost:5000/assignedLocations";
export const logicLocationTrakingPage = () => {
  const [assignedLocations, setAssignedLocations] = useState([]);
  const [error, setError] = useState(null);
  let api = helpHttp();

  useEffect(() => {
    const getData = async () => {
      let json = await api.get(url);
      setAssignedLocations(json);
    };
    getData();
  }, [url]);

  const deleteAssigned = (objectLocation) => {
    const { id, location, assignedCounter } = objectLocation;
    let message = `Estas seguro de eliminar la asignacion ${location} de ${assignedCounter}`;
    let isDelete = window.confirm(message);
    if (isDelete) {
      let endpoint = `${url}/${id}`;
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
  return { assignedLocations, deleteAssigned, error };
};
