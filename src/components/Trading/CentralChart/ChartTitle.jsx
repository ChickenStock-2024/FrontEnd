import React from "react";

const mokData = {
  company: "삼성전자",
  price: 84400,
  changesRatio: "-3.65%",
  changes: "-3200",
};

const ChartTitle = ({ stockId }) => {
  return (
    <div className="flex justify-between items-center mx-2 my-10">
      {/* 종목 이름 */}
      <div className="flex gap-3">
        <div className="bg-blue-700 w-8 h-8 rounded-full text-white text-center">
          삼성
        </div>
        <h2 className="text-2xl font-bold">
          {stockId}번 회사: {mokData.company}
        </h2>
      </div>
      {/* 가격 등락 부분 */}
      <div
        className={`flex gap-4 items-center ${Number(mokData.changes) < 0 ? "text-blue-700" : "text-red-500"}`}
      >
        <span className="text-2xl font-bold">{mokData.price}</span>
        <span className="text-lg font-bold">{mokData.changesRatio}</span>
        <span className="text-lg font-bold">{mokData.changes}</span>
      </div>
    </div>
  );
};

export default ChartTitle;
