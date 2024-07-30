import React from "react";
import QuantityButton from "./QuantityButton";

const StockBuy = () => {
  return (
    <div className="m-4">
      <div className="mb-4">
        <label htmlFor="price" className="font-bold">
          가격
        </label>
        <div className="flex justify-between p-2 border border-gray-400 rounded-md">
          <input
            id="price"
            type="number"
            className="w-full focus:outline-none text-right"
          />
          <span className="text-gray-400">원</span>
        </div>
      </div>

      <label htmlFor="quantity" className="font-bold">
        수량
      </label>
      <div className="flex justify-between p-2 border border-gray-400 rounded-md">
        <input
          id="quantity"
          type="number"
          className="w-full focus:outline-none text-right"
        />
        <span className="text-gray-400">주</span>
      </div>
      <div>
        <QuantityButton />
      </div>
    </div>
  );
};

export default StockBuy;
