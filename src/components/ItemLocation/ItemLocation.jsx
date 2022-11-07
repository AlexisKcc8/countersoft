import React from "react";
import "./styleItemLocation.css";
export const ItemLocation = (props) => {
  const { location } = props;
  return (
    <li className="item-location">
      <a href={`#${location.id}`} className="item-location__link">
        {location.location}
      </a>
    </li>
  );
};
