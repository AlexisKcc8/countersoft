import React from "react";
import { ItemNavLink } from "../ItemNavLink/ItemNavLink";
import "./styleNavbarMenu.css";
export const NavbarMenu = () => {
  return (
    <nav className="container-nabvar">
      <section className="container-nabvar__container-title">
        <h1 className="container-nabvar__title">🧮CounterSoft</h1>
      </section>
      <section className="container-nabvar__container-list">
        <ul className="container-nabvar__list">
          <li className="container-nabvar__item">
            <ItemNavLink
              to="/asignacion-locaciones"
              className="container-nabvar__link"
            >
              Asignación de <br /> locaciones
            </ItemNavLink>
          </li>
          <li className="container-nabvar__item">
            <ItemNavLink
              className="container-nabvar__link"
              to="/seguimiento-de-locaciones"
            >
              Seguimiento de <br /> Locaciones
            </ItemNavLink>
          </li>
          <li className="container-nabvar__item">
            <ItemNavLink className="container-nabvar__link" to="/reportes">
              Seguimiento de <br /> reportes
            </ItemNavLink>
          </li>
          <li className="container-nabvar__item">
            <ItemNavLink
              className="container-nabvar__link"
              to="/eficiencia-grupal"
            >
              Eficiencia <br />
              Grupal
            </ItemNavLink>
          </li>
          <li className="container-nabvar__item">
            <ItemNavLink
              className="container-nabvar__link"
              to="/eficiencia-contador"
            >
              Eficiencia <br /> Contador
            </ItemNavLink>
          </li>
          <li className="container-nabvar__item">
            <button className="container-nabvar__link">Cargar datos</button>
          </li>
        </ul>
      </section>
    </nav>
  );
};
