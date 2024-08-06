import React from "react";
import { Link } from "react-router-dom";

const holdingStockList = {
  balance: "5600459",
  holding_list: [
    {
      stock_id: 1,
      company_title: "삼성전자",
      price: 54643524,
      volume: 534,
    },
    {
      stock_id: 2,
      company_title: "LG",
      price: 546494,
      volume: 50,
    },
    {
      stock_id: 3,
      company_title: "카카오",
      price: 546494,
      volume: 50,
    },
  ],
};

const StockList = () => {
  return (
    <div className="border border-red-300 m-3">
      <div className="font-bold border-b-2 border-black pb-2 text-center">
        보유 종목
      </div>
      {/* 반복할 부분 */}
      {holdingStockList.holding_list.map((holding, index) => (
        <Link to={`/trading/${holding.stock_id}`} key={index}>
          <div className="flex justify-between border-b p-2">
            <div className="flex gap-2">
              <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
              <div>{holding.company_title}</div>
            </div>
            <div className="text-sm">XXX원</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StockList;
