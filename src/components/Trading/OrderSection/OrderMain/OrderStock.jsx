import React from "react";
import OrderStockTabs from "./OrderStockTabs";
import OrderStockSell from "./OrderStockSell";
import OrderStockBuy from "./OrderStockBuy";
import OrderStockInput from "./OrderStockInput";
import { useState } from "react";
import { useParams } from "react-router-dom";

const stockIdToCompanyId = {
  "005930": 1,
  "009150": 2,
  "000660": 3,
  299660: 4,
  "042700": 5,
  "035420": 6,
  "035720": 7,
  "028300": 8,
  "084650": 9,
  257720: 10,
};

const OrderStock = ({
  selectedPrice,
  selectedPriceState,
  setSelectedPriceState,
  marketPrice,
  setActiveTabMarket,
}) => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const [isMarketPrice, setIsMarketPrice] = useState(false);
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
    setActiveTabMarket(data);
  };
  const { stockId } = useParams();

  const selectedSection = (tabOption) => {
    switch (tabOption) {
      case "sell":
        return (
          <OrderStockSell
            price={price}
            quantity={quantity}
            isMarketPrice={isMarketPrice}
            companyId={stockIdToCompanyId[stockId]}
          />
        );
      case "buy":
        return (
          <OrderStockBuy
            price={price}
            quantity={quantity}
            isMarketPrice={isMarketPrice}
            companyId={stockIdToCompanyId[stockId]}
          />
        );
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
        isMarketPrice={isMarketPrice}
        setIsMarketPrice={setIsMarketPrice}
      />
      {selectedSection(activeTabOption)}
    </div>
  );
};

export default OrderStock;
