import React from "react";
import OrderBook from "./OrderBook";
import OrderStock from "./OrderStock";

const Order = () => {
  return (
    <div className="flex h-[500px]">
      <div className="w-2/5 bg-slate-100">
        <OrderBook />
      </div>
      <div className="w-3/5 bg-slate-200">
        <OrderStock />
      </div>
    </div>
  );
};

export default Order;
