import React from "react";
import useStockDataStore from "../../../store/useStockDataStore";
// import companyLogo from "../../../assets/005930.png";
import { useParams } from "react-router-dom";
import {
  삼성전자,
  삼성전기,
  SK하이닉스,
  셀리드,
  한미반도체,
  NAVER,
  카카오,
  HLB,
  랩지노믹스,
  실리콘투,
} from "./../../../assets/companylogo/index";

const companyNames = {
  "005930": "삼성전자",
  "009150": "삼성전기",
  "000660": "SK하이닉스",
  299660: "셀리드",
  "042700": "한미반도체",
  "035420": "NAVER",
  "035720": "카카오",
  "028300": "HLB",
  "084650": "랩지노믹스",
  257720: "실리콘투",
};

const companyLogos = {
  "005930": 삼성전자,
  "009150": 삼성전기,
  "000660": SK하이닉스,
  299660: 셀리드,
  "042700": 한미반도체,
  "035420": NAVER,
  "035720": 카카오,
  "028300": HLB,
  "084650": 랩지노믹스,
  257720: 실리콘투,
};

const ChartTitle = () => {
  const stockInfo = useStockDataStore((state) => state.stockInfo);
  const { stockId } = useParams();

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
    <div className="flex justify-between items-center mx-8 mt-3 mb-6">
      <div className="flex gap-3 items-center">
        <img
          src={companyLogos[stockId]}
          alt="회사 로고"
          className="w-8 h-8 rounded-full"
        />
        {/* 종목 이름 */}
        <h2 className="text-2xl font-bold">{companyNames[stockId]}</h2>
        <div className="text-lg">{stockId}</div>
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
