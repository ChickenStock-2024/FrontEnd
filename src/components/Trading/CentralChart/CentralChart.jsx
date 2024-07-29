import React from "react";
import StockSearch from "./StockSearch";
import Input from "../../Input";
import StockChart from "./StockChart";

const CentralChart = () => {
  return (
    <div className="px-2 border border-red-500">
      {/* <StockSearch /> */}
      <Input placeholder={"종목 검색"} />
      <StockChart />
    </div>
  );
};

export default CentralChart;
