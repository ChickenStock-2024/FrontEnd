import React from "react";
import OrderStockTabs from "./OrderStockTabs";
import OrderStockSell from "./OrderStockSell";
import OrderStockBuy from "./OrderStockBuy";
import OrderStockInput from "./OrderStockInput";
import { useState, useContext } from "react";

const OrderStock = ({
  selectedPrice,
  selectedPriceState,
  setSelectedPriceState,
  marketPrice,
  setActiveTabMarket,
}) => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
    setActiveTabMarket(data);
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

  const [price, setPrice] = useState(0);
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
        selectedPrice={selectedPrice}
        selectedPriceState={selectedPriceState}
        setSelectedPriceState={setSelectedPriceState}
        marketPrice={marketPrice}
      />
      {selectedSection(activeTabOption)}
    </div>
  );
};

export default OrderStock;
