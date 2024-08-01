import React from "react";
import OrderBook from "./OrderBook";
import OrderStock from "./OrderStock";
import { useParams } from "react-router-dom";

const OrderMain = () => {
  const { stockId } = useParams();

  return (
    <div className="flex h-[500px]">
      <div className="w-2/5 bg-slate-100">
        <span>{stockId}번 주식 매매창</span>
        <OrderBook />
      </div>
      <div className="w-3/5">
        <OrderStock />
      </div>
    </div>
  );
};

export default OrderMain;
