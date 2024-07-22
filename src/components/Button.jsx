import React from "react";

const Button = ({ text, type, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-yellow2 w-32 px-6 py-3 font-bold rounded-lg"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
