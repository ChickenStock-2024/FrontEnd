import React from "react";
import useStockDataStore from "../../../store/useStockDataStore";
import companyLogo from "../../../assets/005930.png";

const mokData = {
  company: "삼성전자",
  price: 84400,
  changesRatio: "-3.65%",
  changes: "-3200",
};

const ChartTitle = ({ stockId }) => {
  const stockInfo = useStockDataStore((state) => state.stockInfo);

  let txtColor = "";
  let changeSign = "-";
  let plusSign = "";

  if (stockInfo.change > 0) {
    txtColor = "text-red-600";
    changeSign = "▲";
    plusSign = "+";
  }

  if (stockInfo.change < 0) {
    txtColor = "text-blue-600";
    changeSign = "▼";
  }

  return (
    <div className="flex justify-between items-center mx-2 my-6">
      {/* 종목 이름 */}
      <div className="flex gap-3">
        {/* <div className="bg-blue-700 w-8 h-8 rounded-full text-white text-center">
          삼성
        </div> */}
        <img src={companyLogo} alt="" className="w-8 h-8 rounded-full" />
        <h2 className="text-2xl font-bold">
          {stockId}번 회사: {mokData.company}
        </h2>
        <div className="align-baseline">{stockInfo.stockCode}</div>
      </div>

      {/* 등락 부호에 따라 색상, 화살표 지정 */}
      {/* 가격 등락 부분 */}
      <div className={`flex gap-4 items-center ${txtColor}`}>
        <span className="text-2xl font-bold">
          {parseInt(stockInfo.currentPrice).toLocaleString()}
        </span>
        <span className="text-lg font-bold">
          {plusSign}
          {stockInfo.changeRate}%
        </span>
        <span className="text-lg font-bold">
          {changeSign}
          {Math.abs(stockInfo.change)}
        </span>
      </div>
    </div>
  );
};

export default ChartTitle;
