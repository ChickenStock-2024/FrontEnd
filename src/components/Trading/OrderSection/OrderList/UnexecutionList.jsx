import React, { useEffect } from "react";
import { useState } from "react";
import useLoginUserInfoStore from "../../../../store/useLoginUserInfoStore.js";
import { defaultInstance } from "../../../../api/axios.jsx";
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
} from "./../../../../assets/companylogo/index.js";

const companyLogos = {
  삼성전자: 삼성전자,
  삼성전기: 삼성전기,
  SK하이닉스: SK하이닉스,
  셀리드: 셀리드,
  한미반도체: 한미반도체,
  NAVER: NAVER,
  카카오: 카카오,
  HLB: HLB,
  랩지노믹스: 랩지노믹스,
  실리콘투: 실리콘투,
};

// 미체결 리스트 요청
const unExecutionList = [
  {
    companyName: "카카오",
    price: "39000",
    volume: "2",
    status: "매도",
    created_at: "2024-08-14T12:54:20.1125",
  },
  {
    companyName: "삼성전자",
    price: "75000",
    volume: "4",
    status: "매수",
    created_at: "2024-08-14T10:03:30.0007",
  },
];

const UnexecutionList = () => {
  const [unexecutionList, setUnexcutionList] = useState([]);
  // const accountId = useLoginUserInfoStore(
  //   (state) => state.loginUserInfo.isLogined
  // );
  // null 이라서 에러
  const accountId = 1;

  useEffect(() => {
    getUnexecutionList(accountId);
  }, [accountId]);

  const getUnexecutionList = async (accountId) => {
    try {
      const response = await defaultInstance.get(
        `/account/${accountId}/unexecution`
      );
      console.log(response.data);
      setUnexcutionList(response.data.unexcutedStockInfos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="font-bold test-lg mb-4">미체결</div>
      {unExecutionList.map((unExecution, index) => (
        <div
          className="flex gap-x-4 justify-between items-center mb-4"
          key={index}
        >
          <img
            src={companyLogos[unExecution.companyName]}
            alt=""
            className="w-8 h-8 rounded-full"
          />

          <div className="flex-1">
            <div className="font-semibold">{unExecution.companyName}</div>
            <div className="flex gap-2">
              <div
                className={`text-xs ${unExecution.status === "매수" ? "text-red-500" : "text-blue-500"}`}
              >
                {unExecution.status}
              </div>
              <div className="font-light text-xs">
                {parseInt(unExecution.price).toLocaleString()}원
              </div>
              <div className="font-light text-xs">{unExecution.volume}주</div>
            </div>
          </div>
          <button>⨉</button>
        </div>
      ))}
    </div>
  );
};

export default UnexecutionList;
