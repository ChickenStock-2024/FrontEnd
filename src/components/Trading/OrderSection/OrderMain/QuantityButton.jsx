import React from "react";

const QuantityButton = ({ percent, onClickPercent, disabled }) => {
  const onClick = () => {
    onClickPercent(percent);
  };
  return (
    <button
      className="bg-yellow3 rounded"
      onClick={onClick}
      disabled={disabled}
    >
      {percent}%
    </button>
  );
};

export default QuantityButton;
