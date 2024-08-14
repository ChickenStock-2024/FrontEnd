import React from "react";
import CentralChart from "../components/Trading/CentralChart/CentralChart";
import StockList from "../components/Trading/StockList";
import OrderSection from "../components/Trading/OrderSection/OrderSection";
import { useParams } from "react-router-dom";

const Trading = () => {
  const { stockId } = useParams();
  return (
    <div className="flex pt-24 min-w-[1280px]">
      <div className="w-2/12">
        <StockList />
      </div>
      <div className="w-6/12 h-full border-x">
        <CentralChart />
      </div>
      <div className="w-4/12">
        <OrderSection />
      </div>
    </div>
  );
};

export default Trading;
