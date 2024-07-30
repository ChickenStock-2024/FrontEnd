import React, { useState } from "react";
import OrderSectionTabs from "./OrderSectionTabs";
import Order from "./Order";
import OrderList from "./OrderList";
import Account from "./Account";

const OrderSection = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  const selectedSection = (tabOption) => {
    switch (tabOption) {
      case "order":
        return <Order />;
      case "orderList":
        return <OrderList />;
      case "account":
        return <Account />;
      default:
        null;
    }
  };

  return (
    <div className="m-2">
      <div className="bg-violet-100 h-12">대회 정보 부분</div>
      <OrderSectionTabs getActiveTabOption={getActiveTabOption} />
      {selectedSection(activeTabOption)}
    </div>
  );
};

export default OrderSection;
