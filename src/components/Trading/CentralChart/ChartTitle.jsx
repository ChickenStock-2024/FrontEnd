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

// const stockList = [
//   {
//     stockId: "005930",
//     companyName: "삼성전자",
//     logo: 삼성전자,
//   },
//   {
//     stockId: "009150",
//     companyName: "삼성전기",
//     logo: 삼성전기,
//   },
//   {
//     stockId: "000660",
//     companyName: "SK하이닉스",
//     logo: SK하이닉스,
//   },
//   {
//     stockId: "299660",
//     companyName: "셀리드",
//     logo: 셀리드,
//   },
//   {
//     stockId: "042700",
//     companyName: "한미반도체",
//     logo: 한미반도체,
//   },
//   {
//     stockId: "035420",
//     companyName: "NAVER",
//     logo: NAVER,
//   },
//   {
//     stockId: "035720",
//     companyName: "카카오",
//     logo: 카카오,
//   },
//   {
//     stockId: "028300",
//     companyName: "HLB",
//     logo: HLB,
//   },
//   {
//     stockId: "084650",
//     companyName: "랩지노믹스",
//     logo: 랩지노믹스,
//   },
//   {
//     stockId: "257720",
//     companyName: "실리콘투",
//     logo: 실리콘투,
//   },
// ];

const ChartTitle = () => {
  const stockInfo = useStockDataStore((state) => state.stockInfo);
  const { stockId } = useParams();
  // const logoImgLink = require(
  //   `../../../assets/companylogo/${stockId}.png`
  // ).default();

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
        <img
          src={companyLogos[stockId]}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <h2 className="text-2xl font-bold">{companyNames[stockId]}</h2>
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
