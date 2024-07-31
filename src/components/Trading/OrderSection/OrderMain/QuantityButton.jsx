import React from "react";

const QuantityButton = ({ percent, onClickPercent }) => {
  const onClick = () => {
    onClickPercent(percent);
  };
  return (
    <button className="bg-yellow3 rounded" onClick={onClick}>
      {percent}%
    </button>
  );
};

export default QuantityButton;
