import React from "react";
import "./styleModal.css";
export const Modal = (props) => {
  const { isOpen, closeModal } = props;
  const handleCloseModal = (e) => e.stopPropagation();
  return (
    <section
      className={`modal ${isOpen && "modal--is-open"}`}
      onClick={closeModal}
    >
      <article className="modal__container-content" onClick={handleCloseModal}>
        <section className="modal__container-content-header">
          <h2>Locaciones para Victor Puc</h2>
          <button
            className="modal__container-content-header-btn-close"
            onClick={closeModal}
          >
            ❎
          </button>
        </section>
        <section className="modal__container-content-body">
          <h3>body del modal</h3>
        </section>
        <section className="modal__container-content-footer">
          <h3>footer del modal</h3>
        </section>
      </article>
    </section>
  );
};
