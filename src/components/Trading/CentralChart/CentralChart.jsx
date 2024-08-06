import React from "react";
import StockSearch from "./StockSearch";
import Input from "../../Input";
import StockChart from "./StockChart";

const CentralChart = () => {
  return (
    <div className="px-2 border border-red-500">
      {/* <Input placeholder={"종목 검색"} /> */}
      <StockSearch />
      <StockChart />
    </div>
  );
};

export default CentralChart;
