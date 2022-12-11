import React from "react";
import { Children } from "react";
import "./styleModal.css";
export const Modal = (props) => {
  const { isOpen, closeModal, title, children } = props;
  const handleCloseModal = (e) => e.stopPropagation();
  return (
    <section
      className={`modal ${isOpen && "modal--is-open"}`}
      onClick={closeModal}
    >
      <article className="modal__container-content" onClick={handleCloseModal}>
        <button
          className="modal__container-content-btn-close"
          onClick={closeModal}
        >
          ❎
        </button>
        <section className="modal__container-content-header">
          <h2 className="modal__container-content-header-title">{title}</h2>
        </section>
        <section className="modal__container-content-body">{children}</section>
      </article>
    </section>
  );
};
