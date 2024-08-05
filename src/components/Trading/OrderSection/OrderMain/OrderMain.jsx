import React from "react";
import OrderBook from "./OrderBook";
import OrderStock from "./OrderStock";
import { useParams } from "react-router-dom";
import { createContext, useState } from "react";

export const PriceContext = createContext();

const OrderMain = () => {
  const { stockId } = useParams();
  const [selectedPrice, setSelectedPrice] = useState("");

  // const onClickPrice = (e) => {
  //   console.log(e.currentTarget);
  //   const currentPrice = e.currentTarget.firstChild.innerHTML.replace(/,/g, "");
  //   // const numericPrice = e.target.value.replace(/,/g, '');
  //   setSelectedPrice(currentPrice);
  // };

  return (
    <div className="flex h-[500px]">
      <PriceContext.Provider value={{ selectedPrice, setSelectedPrice }}>
        <div className="w-2/5 overflow-y-auto">
          <OrderBook />
        </div>
        <div className="w-3/5">
          <OrderStock />
        </div>
      </PriceContext.Provider>
    </div>
  );
};

export default OrderMain;
