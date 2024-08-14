import React from "react";
import { Link } from "react-router-dom";
import 삼성전자 from "./../../assets/companylogo/005930.png";
import 삼성전기 from "./../../assets/companylogo/009150.png";
import SK하이닉스 from "./../../assets/companylogo/000660.png";
import 셀리드 from "./../../assets/companylogo/299660.png";
import 한미반도체 from "./../../assets/companylogo/042700.png";
import NAVER from "./../../assets/companylogo/035420.png";
import 카카오 from "./../../assets/companylogo/035720.png";
import HLB from "./../../assets/companylogo/028300.png";
import 랩지노믹스 from "./../../assets/companylogo/084650.png";
import 실리콘투 from "./../../assets/companylogo/257720.png";

const stockList = [
  {
    stockId: "005930",
    companyName: "삼성전자",
    logo: 삼성전자,
  },
  {
    stockId: "009150",
    companyName: "삼성전기",
    logo: 삼성전기,
  },
  {
    stockId: "000660",
    companyName: "SK하이닉스",
    logo: SK하이닉스,
  },
  {
    stockId: "299660",
    companyName: "셀리드",
    logo: 셀리드,
  },
  {
    stockId: "042700",
    companyName: "한미반도체",
    logo: 한미반도체,
  },
  {
    stockId: "035420",
    companyName: "NAVER",
    logo: NAVER,
  },
  {
    stockId: "035720",
    companyName: "카카오",
    logo: 카카오,
  },
  {
    stockId: "028300",
    companyName: "HLB",
    logo: HLB,
  },
  {
    stockId: "084650",
    companyName: "랩지노믹스",
    logo: 랩지노믹스,
  },
  {
    stockId: "257720",
    companyName: "실리콘투",
    logo: 실리콘투,
  },
];

const StockList = () => {
  return (
    <div className="m-3">
      <div className="font-bold border-b-2 border-black pb-3 my-6 text-center">
        전체 종목
      </div>
      {/* 반복할 부분 */}
      {stockList.map((holding, index) => (
        <Link to={`/trading/${holding.stockId}`} key={index}>
          <div className="flex justify-between border-b p-3">
            <div className="flex gap-2">
              <img src={holding.logo} alt="" className="w-6 h-6 rounded-full" />
              <div>{holding.companyName}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StockList;
