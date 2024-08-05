import React from "react";
import { useContext } from "react";
import { PriceContext } from "./OrderMain";

const OrderBookStockPrice = ({ price, volume, bgColor }) => {
  const { onClickPrice } = useContext(PriceContext);

  return (
    <div
      className={`${bgColor} flex justify-between p-2 mb-1 text-sm`}
      onClick={onClickPrice}
      // role="button"
    >
      <div className="price">{price.toLocaleString()}</div>
      {/* <div className="changeRate">
        {changeRate}
        {changeRateUnit}
      </div> */}
      <div className="volume">{volume.toLocaleString()}</div>
    </div>
  );
};

export default OrderBookStockPrice;
