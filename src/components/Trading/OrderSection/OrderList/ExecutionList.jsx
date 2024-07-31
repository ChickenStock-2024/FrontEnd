import React from "react";

const ExecutionList = () => {
  // 체결 리스트를 요청
  const executionList = [
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
    {
      company_name: "카카오",
      price: "41000",
      quantity: "5",
      status: "매수체결",
      created_at: "2022-07-23T12:54:20.1125",
    },
    {
      company_name: "삼성전자",
      price: "83200",
      quantity: "12",
      status: "매도체결",
      created_at: "2024-07-23T10:03:30.0007",
    },
  ];

  const handleTime = (strDate) => {
    const date = new Date(strDate);
    const hour = ("0" + date.getHours()).substr(-2);
    const minute = ("0" + date.getMinutes()).substr(-2);
    const second = ("0" + date.getSeconds()).substr(-2);
    return `${hour}:${minute}:${second} `;
  };

  const priceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
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
                className={`text-xs ${execution.status.substr(0, 2) === "매수" ? "text-red-500" : "text-blue-500"}`}
              >
                {execution.status.substr(0, 2)}
              </div>
              <div className="font-light text-xs">{execution.quantity}주</div>
              <div className="font-light text-xs">
                {priceFormat(execution.price)}원
              </div>
            </div>
          </div>
          <div>
            <div>{priceFormat(execution.price * execution.quantity)}원</div>
          </div>
        </div>
      ))}
    </div>

    // <div>
    //   {executionList.map((execution) => (
    //     <div>{execution.comany_name}</div>
    //   ))}
    // </div>
  );
};

export default ExecutionList;
