import React from "react";
import "./StyleItemCounter.css";
export const ItemCounter = (props) => {
  const { dataCounter, updateCounter, closeModal } = props;
  return (
    <section className="container-item-counter">
      <div className="container-item-counter__circle-avatar">
        {dataCounter.nombre[0]}
        {dataCounter.apellido[0]}
      </div>
      <h2 className="container-item-counter__name-counter">{`${dataCounter.nombre} ${dataCounter.apellido}`}</h2>
      <button
        className="container-item-counter__btn-asignar"
        onClick={() => {
          updateCounter(`${dataCounter.nombre} ${dataCounter.apellido}`);
          closeModal();
        }}
      >
        Asignar
      </button>
    </section>
  );
};
