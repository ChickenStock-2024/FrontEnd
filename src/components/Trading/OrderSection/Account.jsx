import React from "react";
import { useState, useEffect } from "react";
import useStockDataStore from "./../../../store/useStockDataStore";
import useLoginUserInfoStore from "./../../../store/useLoginUserInfoStore";
import { defaultInstance } from "./../../../api/axios";

const holdings = {
  balance: "5600459",
  holding_list: [
    {
      companyName: "삼성전자",
      price: 3546400,
      volume: 53,
      currentPrice: 77200,
    },
    {
      companyName: "카카오",
      price: 1546500,
      volume: 50,
      currentPrice: 36800,
    },
  ],
};

const Account = () => {
  const stockInfo = useStockDataStore((state) => state.stockInfo);
  const accountId = useLoginUserInfoStore(
    (state) => state.loginUserInfo.accountId
  );
  const [holding, setHolding] = useState();

  useEffect(() => {
    getAccountInfo(accountId);
  }, [accountId]);

  const getAccountInfo = async (accountId) => {
    try {
      const response = await defaultInstance.get(`account/${accountId}`);
      console.log(response.data);
      setHolding(response.data.stocks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-y-auto max-h-[450px]">
      {/* 총 수익률 */}
      <div className="grid grid-cols-3 gap-2 items-center text-center text-sm p-3 mb-6">
        <div>
          <div>4,275,600원</div>
          <div>총 평가금액</div>
        </div>
        <div>
          <div>749,512원</div>
          <div>총 평가수익금</div>
        </div>
        <div>
          <div>+17.53%</div>
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
          <div>보유수량</div>
        </div>
        <div>평가수익률</div>
      </div>
      {/* 실제 반복 도는 부분 */}
      {holdings.holding_list.map((holding, index) => (
        <div key={index}>
          <div className="grid grid-cols-5 gap-2 items-center text-right text-sm p-3">
            <div className="col-span-2 text-left">{holding.companyName}</div>
            <div>
              <div>
                {(holding.currentPrice * holding.volume).toLocaleString()}원
              </div>
              <div>
                {Math.round(holding.price / holding.volume).toLocaleString()}원
              </div>
            </div>
            <div>
              <div>{holding.volume}주</div>
            </div>
            <div>
              {(
                ((holding.currentPrice * holding.volume) / holding.price) *
                  100 -
                100
              ).toFixed(2)}
              %
            </div>
          </div>
          <hr className="mb-2" />
        </div>
      ))}
    </div>
  );
};

export default Account;
