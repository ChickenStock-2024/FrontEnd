import React from "react";
import OrderStockTabs from "./OrderStockTabs";
import OrderStockSell from "./OrderStockSell";
import OrderStockBuy from "./OrderStockBuy";
import { useState } from "react";

const OrderStock = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  const selectedSection = (tabOption) => {
    switch (tabOption) {
      case "sell":
        return <OrderStockSell />;
      case "buy":
        return <OrderStockBuy />;
      default:
        null;
    }
  };

  return (
    <div>
      <OrderStockTabs getActiveTabOption={getActiveTabOption} />
      {selectedSection(activeTabOption)}
    </div>
  );
};

export default OrderStock;
