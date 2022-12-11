import React from "react";
import "./styleCardLocation.css";
export const CardLocation = (props) => {
  const { dataLocation } = props;
  return (
    <section className="card-location">
      <div className="card-location__header">
        <h2>Locación : {dataLocation.location}</h2>
      </div>
      <div className="card-location__body">
        <div className="card-location__texts">
          <p className="card-location__text">
            Estilos : {dataLocation.NumberStylesLocation}
          </p>
          <p className="card-location__text">
            Rollos: {dataLocation.NumberOfRolls}
          </p>
        </div>
        <button className="card-location__btn-add-location">
          Asignar Locación
        </button>
      </div>
      <div className="card-location__footer">
        <h5 className="card-location__title">
          Almacen : {dataLocation.warehouse}
        </h5>
      </div>
    </section>
  );
};
