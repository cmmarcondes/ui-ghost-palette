import React from "react";
import { Container } from "./styles";

const Modal = ({ title, message, isModalOpen, toggleState }) => {
  return (
    isModalOpen && (
      <Container isModalOpen={isModalOpen}>
        <div className="modal-holder">
          <i class="fa-solid fa-circle-exclamation"></i>
          <h2>{title}</h2>
          <h3>{message}</h3>
          <button type="button" onClick={toggleState}>ok</button>
        </div>
      </Container>
    )
  );
};

export default Modal;
