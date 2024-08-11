import React from "react";
import StockSearch from "./StockSearch";
import Input from "../../Input";
import StockChart from "./StockChart";

const CentralChart = () => {
  return (
    <div className="p-2">
      {/* <Input placeholder={"종목 검색"} /> */}
      <StockSearch />
      <StockChart />
    </div>
  );
};

export default CentralChart;
