import React from "react";
import CentralChart from "../components/Trading/CentralChart/CentralChart";
import StockList from "../components/Trading/StockList";
import OrderSection from "../components/Trading/OrderSection/OrderSection";

const Trading = () => {
  return (
    <div className="flex">
      <div className="w-2/12 border-x">
        <StockList />
      </div>
      <div className="w-6/12 h-fullborder-x">
        <CentralChart />
      </div>
      <div className="w-4/12 border-x">
        <OrderSection />
      </div>
    </div>
  );
};

export default Trading;
