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
          zIndex: 100,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            maxWidth: "100%",
            maxHeight: "90%",
            overflowY: "auto",
            backgroundColor: "white",
            borderRadius: 5,
            color: "black",
          }}
        >
          {children}
          <button
            className="absolute top-2 right-2 text-2xl px-2 items-center hover:bg-gray-100"
            onClick={closeModal}
          >
            ⨉
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
