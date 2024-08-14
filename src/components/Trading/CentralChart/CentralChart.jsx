import React from "react";
import StockSearch from "./StockSearch";
import StockChart from "./StockChart";

const CentralChart = ({ stockId }) => {
  return (
    <div className="p-2">
      {/* <Input placeholder={"종목 검색"} /> */}
      <StockSearch />
      <StockChart stockId={stockId} />
    </div>
  );
};

export default CentralChart;
