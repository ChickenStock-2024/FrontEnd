import React from "react";
import OrderStockTabs from "./OrderStockTabs";
import OrderStockSell from "./OrderStockSell";
import OrderStockBuy from "./OrderStockBuy";
import OrderStockInput from "./OrderStockInput";
import { useState, useContext } from "react";
import { PriceContext } from "./OrderMain";

const OrderStock = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  const selectedSection = (tabOption) => {
    switch (tabOption) {
      case "sell":
        return <OrderStockSell price={price} quantity={quantity} />;
      case "buy":
        return <OrderStockBuy price={price} quantity={quantity} />;
      default:
        null;
    }
  };

  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <OrderStockTabs getActiveTabOption={getActiveTabOption} />
      <OrderStockInput
        activeTabOption={activeTabOption}
        setPrice={setPrice}
        setQuantity={setQuantity}
        price={price}
        quantity={quantity}
      />
      {selectedSection(activeTabOption)}
    </div>
  );
};

export default OrderStock;
