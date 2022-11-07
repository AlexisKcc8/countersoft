import React from "react";
import "./styleButtonsPagination.css";
export const ButtonsPagination = () => {
  return (
    <section className="container-btns-pagination">
      <ul className="container-btns-pagination__list">
        <li className="container-btns-pagination__item">
          <button className="container-btns-pagination__btn">⏮️Anterior</button>
        </li>
        <li className="container-btns-pagination__item">
          <button className="container-btns-pagination__btn">
            Siguiente ⏭️
          </button>
        </li>
      </ul>
    </section>
  );
};
