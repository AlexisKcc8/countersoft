import React from "react";
import { Children } from "react";
import "./styleModal.css";
export const Modal = (props) => {
  const { isOpen, closeModal, title, children, handlePropagationModal } = props;
  return (
    <section
      className={`modal ${isOpen && "modal--is-open"}`}
      onClick={closeModal}
    >
      <article
        className="modal__container-content"
        onClick={handlePropagationModal}
      >
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
