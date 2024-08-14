import React, { useState } from "react";
import OrderSectionTabs from "./OrderSectionTabs";
import OrderMain from "./OrderMain/OrderMain";
import OrderList from "./OrderList/OrderList";
import Account from "./Account";
import OrderContestInfo from "./OrderContestInfo";

const OrderSection = ({ stockId }) => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  const selectedSection = (tabOption) => {
    switch (tabOption) {
      case "order":
        return <OrderMain />;
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
      <OrderContestInfo />
      <OrderSectionTabs getActiveTabOption={getActiveTabOption} />
      {selectedSection(activeTabOption)}
    </div>
  );
};

export default OrderSection;
