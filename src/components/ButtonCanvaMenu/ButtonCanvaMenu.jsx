import React from "react";

export const ButtonCanvaMenu = () => {
  return (
    <button
      className="col-2 btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
      // style={styleButtonMenu}
    >
      Menu
    </button>
  );
};
