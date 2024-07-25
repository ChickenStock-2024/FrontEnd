import React from "react";

// Date converted to MM-DD-YYYY format
const handleDate = (strDate) => {
  const date = new Date(strDate);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
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
];

const ProfileHistoryTabModal = ({ show, onClose, competitionItem }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${show ? "" : "hidden"}`}
    >
      <div className="flex">
        <div className="flex flex-col bg-white p-4 pt-3 gap-4 rounded-md">
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
                {competitionItem.earnings})
              </div>
            </div>
          </div>
          <hr />
          <div className="">
            {tradeHistoryInfos.map((tradeHistoryInfo, index) => (
              <div className="flex ">
                <div>{handleDate(tradeHistoryInfo.createdAt)}</div>
                <div>{tradeHistoryInfo.companyName}</div>
                <div>{tradeHistoryInfo.quantity}</div>
                <div>{tradeHistoryInfo.status}</div>
                <div>{tradeHistoryInfo.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryTabModal;
