import React from "react";
import CentralChart from "../components/Trading/CentralChart";
import StockList from "../components/Trading/StockList";
import OrderSection from "../components/Trading/OrderSection";

const Trading = () => {
  return (
    <div className="flex h-full">
      <div className="w-2/12 bg-indigo-50">
        <StockList />
      </div>
      <div className="w-6/12 bg-indigo-100">
        <CentralChart />
      </div>
      <div className="w-4/12 bg-indigo-200">
        <OrderSection />
      </div>
    </div>
  );
};

export default Trading;
