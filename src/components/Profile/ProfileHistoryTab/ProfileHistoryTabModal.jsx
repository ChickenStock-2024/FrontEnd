import React from "react";
import { useEffect, useState } from "react";
import { defaultInstance } from "../../../api/axios";
import useProfilePageInfoStore from "../../../store/useProfilePageInfoStore";

// Date converted to YYYY. MM. DD hh:mm:ss format
const handleTime = (strDate) => {
  const date = new Date(strDate);
  const hour = ("0" + date.getHours()).substr(-2);
  const minute = ("0" + date.getMinutes()).substr(-2);
  const second = ("0" + date.getSeconds()).substr(-2);
  return `${hour}:${minute}:${second} `;
};

const ProfileHistoryTabModal = ({
  show,
  onClose,
  competitionItem,
  handleDate,
  // priceFormat,
}) => {
  const [tradeHistoryInfos, setTradeHistoryInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTradeHistoryInfos = async () => {
    try {
      const response = await defaultInstance.get(
        `/competition/history/${competitionItem.accountId}`
      );
      // console.log("매매 내역 히스토리 response: ", response.data);
      setTradeHistoryInfos(response.data);
      setLoading(false);
      // alert("매매 내역 히스토리 가져오기 완료~!!");
    } catch (error) {
      console.log(error);

      alert(
        "매매 내역 히스토리를 불러오지 못했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    getTradeHistoryInfos();
  }, [competitionItem.accountId]);

  if (!tradeHistoryInfos) return null;
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-35 flex justify-center items-center z-40 ${show ? "" : "hidden"}`}
    >
      <div className="flex">
        <div className="flex flex-col bg-white p-4 pt-3 gap-4 rounded-md max-h-[65vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className=" absolute -top-2 -right-3 text-2xl px-1 items-center hover:bg-gray-100"
            >
              ⨉
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
              <div className="flex flex-row justify-end">
                레이팅 변동:
                <div
                  className={`ml-1 ${
                    competitionItem.ratingChange < 0
                      ? "text-blue-500"
                      : competitionItem.ratingChange === 0
                        ? "text-black"
                        : "text-red-500"
                  }`}
                >
                  {`${
                    competitionItem.ratingChange < 0
                      ? `▼${Math.abs(competitionItem.ratingChange)}`
                      : competitionItem.ratingChange === 0
                        ? "-"
                        : `▲${competitionItem.ratingChange}`
                  }`}
                </div>
              </div>
              <div>
                수익률: {(competitionItem.balance - 50000000) / 500000}% (
                {competitionItem.balance.toLocaleString()}원)
              </div>
            </div>
          </div>
          <hr />
          <div>
            {loading ? (
              <div>거래 내역을 불러오는 중입니다...</div>
            ) : error ? (
              <div>거래 내역을 불러오는 데 오류가 발생했습니다: {error}</div>
            ) : (
              tradeHistoryInfos.map((tradeHistoryInfo, index) => (
                <div
                  className="flex gap-x-4 items-center justify-between mb-2"
                  key={index}
                >
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
                        className={`text-xs ${tradeHistoryInfo.status.substr(3, 2) === "매수" ? "text-red-500" : "text-blue-500"}`}
                      >
                        {tradeHistoryInfo.status}
                      </div>
                      <div className="font-light text-xs">
                        {/* {tradeHistoryInfo.volum}주 */}
                        {tradeHistoryInfo.quantity}주
                      </div>
                      <div className="font-light text-xs">
                        {tradeHistoryInfo.price.toLocaleString()}원
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {(
                        tradeHistoryInfo.price * tradeHistoryInfo.quantity
                      ).toLocaleString()}
                      원
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <hr />
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryTabModal;
