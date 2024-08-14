import React from "react";
import { useState, useEffect } from "react";
import useStockDataStore from "./../../../store/useStockDataStore";
import useLoginUserInfoStore from "./../../../store/useLoginUserInfoStore";
import { defaultInstance } from "./../../../api/axios";

const holdings = {
  balance: "5600459",
  holding_list: [
    {
      company_title: "삼성전자",
      price: 54643524,
      volume: 534,
    },
    {
      company_title: "LG",
      price: 546494,
      volume: 50,
    },
  ],
};

const Account = () => {
  const stockInfo = useStockDataStore((state) => state.stockInfo);
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  const [holding, setHolding] = useState();

  useEffect(() => {
    getAccountInfo();
  }, []);

  const getAccountInfo = async () => {
    try {
      const response = await defaultInstance.get(
        `account/${loginUserInfo.accountId}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-y-auto max-h-[450px] border border-red-300">
      {/* 총 수익률 */}
      <div className="grid grid-cols-3 gap-2 items-center text-center text-sm p-3 mb-6">
        <div>
          <div>1,200,000원</div>
          <div>총 평가금액</div>
        </div>
        <div>
          <div>200,000원</div>
          <div>총 평가수익금</div>
        </div>
        <div>
          <div>-10%</div>
          <div>총 평가수익률</div>
        </div>
      </div>

      {/* 라벨 */}
      <div className="grid grid-cols-5 gap-2 items-center text-right text-sm bg-gray-100 p-3">
        <div className="col-span-2 text-left">종목</div>
        <div>
          <div>평가금액</div>
          <div>평단가</div>
        </div>
        <div>
          <div>평가수익금</div>
          <div>보유수량</div>
        </div>
        <div>평가수익률</div>
      </div>
      {/* 실제 반복 도는 부분 */}
      {holdings.holding_list.map((holding, index) => (
        <div key={index}>
          <div className="grid grid-cols-5 gap-2 items-center text-right text-sm p-3">
            <div className="col-span-2 text-left">{holding.company_title}</div>
            <div>
              <div>
                {(stockInfo.currentPrice * holding.volume).toLocaleString()}원
              </div>
              <div>
                {Math.round(holding.price / holding.volume).toLocaleString()}원
              </div>
            </div>
            <div>
              <div>평가수익금</div>
              <div>{holding.volume}주</div>
            </div>
            <div>평가수익률</div>
          </div>
          <hr className="mb-2" />
        </div>
      ))}
    </div>
  );
};

export default Account;
