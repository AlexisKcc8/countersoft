import React from "react";
export const Modal = ({ children }) => {
  let arrayLocations = [
    {
      name: "FF.25.D",
      rollos: 65,
    },
    {
      name: "HH.12.C",
      rollos: 46,
    },
    {
      name: "RR.25.B",
      rollos: 15,
    },
    {
      name: "QQ.15.D",
      rollos: 65,
    },
    {
      name: "MM.5.C",
      rollos: 6,
    },
  ];
  return (
    <div
      className="modal fade "
      id="exampleModalCenteredScrollable"
      tabIndex={-1}
      aria-labelledby="exampleModalCenteredScrollableTitle"
      style={{ display: "none", backgroundColor: "#00000067" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5"
              id="exampleModalCenteredScrollableTitle"
            >
              Locaciones por asignar
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul>
              {arrayLocations.map((location) => (
                <li>
                  {location.name} - {location.rollos}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
