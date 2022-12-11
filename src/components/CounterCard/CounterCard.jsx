import React from "react";
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
import "./StyleCounterCard.css";
export const CounterCard = (props) => {
  const { counter, openModal, setCounter } = props;
  return (
    <section className="card-counter">
      <div className="card-counter__header">
        <div className="card-counter__circle-avatar">
          {counter.nombre[0]}
          {counter.apellido[0]}
        </div>
      </div>
      <div className="card-counter__body">
        <h5 className="card-counter__title">
          {counter.nombre} {counter.apellido}
        </h5>
        <p className="card-counter__text">Capacidad: {counter.capacidad}</p>
        <button
          className="card-counter__btn-modal"
          onClick={() => {
            openModal();
            setCounter(counter.nombre + " " + counter.apellido);
          }}
        >
          Asignar Locaciones
        </button>
      </div>
      <div className="card-counter__footer">{hoy.toLocaleDateString()}</div>
    </section>
  );
};
