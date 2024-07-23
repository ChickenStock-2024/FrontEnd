import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            maxWidth: "100%",
            maxHeight: "90%",
            overflowY: "auto",
            backgroundColor: "white",
          }}
        >
          {children}
          <button onClick={closeModal}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
