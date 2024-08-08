import React from "react";
import CentralChart from "../components/Trading/CentralChart/CentralChart";
import StockList from "../components/Trading/StockList";
import OrderSection from "../components/Trading/OrderSection/OrderSection";

const Trading = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <StockList />
      </div>
      <div className="w-6/12 h-full">
        <CentralChart />
      </div>
      <div className="w-4/12">
        <OrderSection />
      </div>
    </div>
  );
};

export default Trading;
