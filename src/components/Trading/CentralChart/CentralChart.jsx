import React from "react";
import StockSearch from "./StockSearch";
import StockChart from "./StockChart";

const CentralChart = ({ stockId }) => {
  return (
    <div className="p-2">
      <StockChart />
    </div>
  );
};

export default CentralChart;
