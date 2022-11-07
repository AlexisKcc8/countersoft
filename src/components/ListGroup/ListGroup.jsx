import React from "react";
import { ItemNavLink } from "../ItemNavLink/ItemNavLink";
export const ListGroup = (props) => {
  const { dataLocation } = props;
  console.log(dataLocation);
  return (
    <div id="list-example" className="list-group">
      {dataLocation.map((location, index) => (
        <a
          className="list-group-item list-group-item-action"
          href={`#list-item-${index + 1}`}
          key={location.id}
        >
          Item 1
        </a>
      ))}
      <a className="list-group-item list-group-item-action" href="#list-item-1">
        Item 1
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">
        Item 2
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">
        Item 3
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">
        Item 4
      </a>
    </div>
  );
};
