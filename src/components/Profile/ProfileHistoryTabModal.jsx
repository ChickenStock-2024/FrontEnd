import React from "react";

// Date converted to YYYY. MM. DD hh:mm:ss format
const handleTime = (strDate) => {
  const date = new Date(strDate);
  const hour = ("0" + date.getHours()).substr(-2);
  const minute = ("0" + date.getMinutes()).substr(-2);
  const second = ("0" + date.getSeconds()).substr(-2);
  return `${hour}:${minute}:${second} `;
};

const tradeHistoryInfos = [
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 체결",
    createdAt: "2024-07-23T12:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 취소",
    createdAt: "2024-07-23T10:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 요청",
    createdAt: "2024-07-23T10:03:28.0654",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 요청",
    createdAt: "2024-07-22T09:13:11.4823",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 체결",
    createdAt: "2024-07-23T12:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 취소",
    createdAt: "2024-07-23T10:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 요청",
    createdAt: "2024-07-23T10:03:28.0654",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 요청",
    createdAt: "2024-07-22T09:13:11.4823",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 체결",
    createdAt: "2024-07-23T12:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 취소",
    createdAt: "2024-07-23T10:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 요청",
    createdAt: "2024-07-23T10:03:28.0654",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 요청",
    createdAt: "2024-07-22T09:13:11.4823",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 체결",
    createdAt: "2024-07-23T12:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 취소",
    createdAt: "2024-07-23T10:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 요청",
    createdAt: "2024-07-23T10:03:28.0654",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 요청",
    createdAt: "2024-07-22T09:13:11.4823",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 체결",
    createdAt: "2024-07-23T12:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 취소",
    createdAt: "2024-07-23T10:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 요청",
    createdAt: "2024-07-23T10:03:28.0654",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 요청",
    createdAt: "2024-07-22T09:13:11.4823",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 체결",
    createdAt: "2024-07-23T12:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 취소",
    createdAt: "2024-07-23T10:03:30.0007",
  },
  {
    companyName: "삼성전자",
    price: "83200",
    quantity: "12",
    status: "매도 요청",
    createdAt: "2024-07-23T10:03:28.0654",
  },
  {
    companyName: "카카오",
    price: "41000",
    quantity: "5",
    status: "매수 요청",
    createdAt: "2024-07-22T09:13:11.4823",
  },
];
const ProfileHistoryTabModal = ({
  show,
  onClose,
  competitionItem,
  handleDate,
  priceFormat,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-35 flex justify-center items-center z-40 ${show ? "" : "hidden"}`}
    >
      <div className="flex">
        <div className="flex flex-col bg-white p-4 pt-3 gap-4 rounded-md max-h-[65vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className=" absolute top-0 right-0 text-black"
            >
              ✖
            </button>
          </div>
          <div className="flex flex-row justify-between my-2 cursor-pointer">
            <div className="block">
              <div className="text-xl">{competitionItem.title}</div>
              <div className="text-xs">
                기간: {handleDate(competitionItem.startAt)} ~{" "}
                {handleDate(competitionItem.endAt)}
              </div>
            </div>
            <div className="block text-right">
              <div>순위: {competitionItem.rank}위</div>
              <div>레이팅: {competitionItem.latestRating}</div>
              <div>
                수익률: {competitionItem.earningRate}% (
                {priceFormat(competitionItem.earnings)}원)
              </div>
            </div>
          </div>
          <hr />
          <div className="">
            {tradeHistoryInfos.map((tradeHistoryInfo, index) => (
              <div className="flex gap-x-4 justify-between mb-2">
                <div className="flex-col text-right">
                  <div className="text-sm">
                    {handleDate(tradeHistoryInfo.createdAt)}
                  </div>
                  <div className="text-xs">
                    {handleTime(tradeHistoryInfo.createdAt)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">
                    {tradeHistoryInfo.companyName}
                  </div>
                  <div className="flex gap-2">
                    <div
                      className={`text-xs ${tradeHistoryInfo.status.substr(0, 2) === "매수" ? "text-red-500" : "text-blue-500"}`}
                    >
                      {tradeHistoryInfo.status}
                    </div>
                    <div className="font-light text-xs">
                      {tradeHistoryInfo.quantity}주
                    </div>
                    <div className="font-light text-xs">
                      {priceFormat(tradeHistoryInfo.price)}원
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {priceFormat(
                      tradeHistoryInfo.price * tradeHistoryInfo.quantity
                    )}
                    원
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryTabModal;
