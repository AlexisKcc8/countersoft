import React from "react";
import { NavLink } from "react-router-dom";
import "./StyleItemNavLink.css";
export const ItemNavLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      className={({ active }) => (active ? "container-nabvar__link" : "active")}
      {...props}
      to={to}
    >
      {children}
    </NavLink>
  );
};
