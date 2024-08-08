import React from "react";
import { useRef, useEffect } from "react";

const OrderBookStockPrice = ({
  price,
  volume,
  bgColor,
  handleClickPrice,
  isSelected,
}) => {
  return (
    <div
      className={`${bgColor} flex justify-around p-2 mb-1 text-sm ${isSelected ? "border-l-8 border-yellow2" : ""}`}
      onClick={() => handleClickPrice(price)}
    >
      <div className="price text-base">{price.toLocaleString()}</div>
      {/* <div className="changeRate">
        {changeRate}
        {changeRateUnit}
      </div> */}
      <div className="volume">{volume.toLocaleString()}</div>
    </div>
  );
};

export default OrderBookStockPrice;
