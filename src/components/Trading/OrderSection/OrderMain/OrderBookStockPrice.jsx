import React from "react";

const OrderBookStockPrice = ({ price, volume, bgColor }) => {
  return (
    <div className={`${bgColor} flex justify-between p-2 mb-1 text-sm`}>
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
