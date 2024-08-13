import { useState } from "react";

const PriceToggle = ({ setIsMarketPrice, isMarketPrice }) => {
  const [activeOption, setActiveOption] = useState("limitPrice");

  const handleSwitchClick = (option) => {
    setActiveOption(option);
    option === "marketPrice" ? setIsMarketPrice(true) : setIsMarketPrice(false);
  };

  return (
    <div className="flex bg-gray-200 p-[3px] rounded-full w-32 text-sm ml-auto">
      <div
        className={`flex-auto rounded-full text-center ${activeOption === "limitPrice" ? "bg-yellow2" : ""}`}
        onClick={() => handleSwitchClick("limitPrice")}
        role="button"
      >
        <div>지정가</div>
      </div>
      <div
        className={`flex-auto rounded-full text-center ${activeOption === "marketPrice" ? "bg-yellow2" : ""}`}
        onClick={() => handleSwitchClick("marketPrice")}
        role="button"
      >
        <div>시장가</div>
      </div>
    </div>
  );
};

export default PriceToggle;
