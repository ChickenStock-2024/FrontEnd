import React from "react";

// 미체결 리스트 요청
const unExecutionList = [
  {
    company_name: "카카오",
    price: "41000",
    quantity: "1",
    status: "매도요청",
    created_at: "2022-07-23T12:54:20.1125",
  },
  {
    company_name: "삼성전자",
    price: "83200",
    quantity: "4",
    status: "매수요청",
    created_at: "2024-07-23T10:03:30.0007",
  },
];

const UnexecutionList = () => {
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
      <div className="font-bold test-lg mb-4">미체결</div>
      {unExecutionList.map((unExecution, index) => (
        <div
          className="flex gap-x-4 justify-between items-center mb-4"
          key={index}
        >
          <div className="bg-indigo-600 rounded-full">img</div>
          <div className="flex-1">
            <div className="font-semibold">{unExecution.company_name}</div>
            <div className="flex gap-2">
              <div
                className={`text-xs ${unExecution.status.substr(0, 2) === "매수" ? "text-red-500" : "text-blue-500"}`}
              >
                {unExecution.status.substr(0, 2)}
              </div>
              <div className="font-light text-xs">
                {priceFormat(unExecution.price)}원
              </div>
              <div className="font-light text-xs">{unExecution.quantity}주</div>
            </div>
          </div>
          <div>X주 남음</div>
        </div>
      ))}
    </div>
  );
};

export default UnexecutionList;
