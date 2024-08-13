import React from "react";
import { useEffect, useState } from "react";
import { defaultInstance } from "../../../../api/axios.jsx";

const ExecutionList = () => {
  // 체결 리스트를 요청 API (accountId를 받아왔다 치고..)

  // const executionList = [
  //   {
  //     company_name: "카카오",
  //     price: 41000,
  //     quantity: "5",
  //     status: "매수체결",
  //     created_at: "2022-07-23T12:54:20.1125",
  //   },
  //   {
  //     company_name: "삼성전자",
  //     price: 83200,
  //     quantity: "12",
  //     status: "매도체결",
  //     created_at: "2024-07-23T10:03:30.0007",
  //   },
  //   {
  //     company_name: "카카오",
  //     price: 41000,
  //     quantity: "5",
  //     status: "매수체결",
  //     created_at: "2022-07-23T12:54:20.1125",
  //   },
  //   {
  //     company_name: "삼성전자",
  //     price: 83200,
  //     quantity: "12",
  //     status: "매도체결",
  //     created_at: "2024-07-23T10:03:30.0007",
  //   },
  //   {
  //     company_name: "카카오",
  //     price: 41000,
  //     quantity: "5",
  //     status: "매수체결",
  //     created_at: "2022-07-23T12:54:20.1125",
  //   },
  //   {
  //     company_name: "삼성전자",
  //     price: 83200,
  //     quantity: "12",
  //     status: "매도체결",
  //     created_at: "2024-07-23T10:03:30.0007",
  //   },
  //   {
  //     company_name: "카카오",
  //     price: 41000,
  //     quantity: "5",
  //     status: "매수체결",
  //     created_at: "2022-07-23T12:54:20.1125",
  //   },
  //   {
  //     company_name: "삼성전자",
  //     price: 83200,
  //     quantity: "12",
  //     status: "매도체결",
  //     created_at: "2024-07-23T10:03:30.0007",
  //   },
  //   {
  //     company_name: "카카오",
  //     price: 41000,
  //     quantity: "5",
  //     status: "매수체결",
  //     created_at: "2022-07-23T12:54:20.1125",
  //   },
  //   {
  //     company_name: "삼성전자",
  //     price: 83200,
  //     quantity: "12",
  //     status: "매도체결",
  //     created_at: "2024-07-23T10:03:30.0007",
  //   },
  // ];

  // 일단 임의의 값 지정
  const accountId = 3;
  const [executionList, setExcutionList] = useState([]);

  const handleTime = (strDate) => {
    const date = new Date(strDate);
    const hour = ("0" + date.getHours()).slice(-2);
    const minute = ("0" + date.getMinutes()).slice(-2);
    const second = ("0" + date.getSeconds()).slice(-2);
    return `${hour}:${minute}:${second}`;
  };

  useEffect(() => {
    getExecutionList(accountId);
  }, [accountId]);

  const getExecutionList = async (accountId) => {
    try {
      const response = await defaultInstance.get(
        `/account/${accountId}/excution`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert(
        "체결 내역 가져오기 실패 " +
          (error.response ? error.response.data.message : error.message)
      );
      setExcutionList([
        {
          company_name: "카카오",
          price: 41000,
          quantity: 5,
          status: "매수체결",
          created_at: "2022-07-23T12:54:20.1125",
        },
        {
          company_name: "삼성전자",
          price: 83200,
          quantity: 12,
          status: "매도취소",
          created_at: "2024-07-23T10:03:30.0007",
        },
      ]);
    }
  };

  return (
    <div>
      <div className="font-bold test-lg mb-4">체결</div>
      {executionList.map((execution, index) => (
        <div
          className="flex gap-x-4 justify-between items-center mb-4"
          key={index}
        >
          <div className="flex-col text-right">
            <div className="text-sm">{handleTime(execution.created_at)}</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold">{execution.company_name}</div>
            <div className="flex gap-2">
              <div
                className={`text-xs ${execution.status.substring(0, 2) === "매수" ? "text-red-500" : "text-blue-500"}`}
              >
                {execution.status.substring(0, 2)}
              </div>
              <div className="font-light text-xs">
                {execution.price.toLocaleString()}원
              </div>
              <div className="font-light text-xs">{execution.quantity}주</div>
            </div>
          </div>
          <div>
            <div>
              {(execution.price * execution.quantity).toLocaleString()}원
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecutionList;
