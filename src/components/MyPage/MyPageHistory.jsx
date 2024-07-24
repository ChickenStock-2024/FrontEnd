import React from "react";

const tabsData = [
  {
    id: "history",
    label: "대회참여 히스토리",
  },
  {
    id: "userSearch",
    label: "유저 검색",
  },
];
const competition = [
  {
    title: "정기 1차 대회",
    startAt: "24-07-22",
    endAt: "24-07-26",
  },
  {
    title: "정기 2차 대회",
    startAt: "24-07-27",
    endAt: "24-07-30",
  },
  {
    title: "정기 3차 대회",
    startAt: "24-08-02",
    endAt: "24-08-05",
  },
  {
    title: "정기 4차 대회",
    startAt: "24-08-07",
    endAt: "24-08-10",
  },
];
const rating = {
  rank: "23",
  latestRating: "+2340",
  earningRate: "30",
  earnings: "300,000",
};

const MyPageHistory = ({ activeTabOption }) => {
  return (
    <>
      <div className="p-4 mx-36">
        {/* 하기에서 배열 반복 돌기 */}
        {competition.map((competitionItem, index) => (
          <div key={index}>
            <div className=" flex flex-row justify-between mb-2 ">
              <div className="block">
                <div className="text-xl">{competitionItem.title}</div>
                <div className="text-xs">
                  기간: {competitionItem.startAt} ~ {competitionItem.endAt}
                </div>
              </div>
              <div className="block text-right">
                <div>순위: {rating.rank}위</div>
                <div>레이팅: {rating.latestRating}</div>
                <div>
                  수익률: {rating.earningRate}% ({rating.earnings})
                </div>
              </div>
            </div>
            <hr className="mb-2" />
          </div>
        ))}
      </div>
      {/* <h1>MyPage의 대회 참여 히스토리 입니당~!!</h1> */}
      {/* <div id="default-tab-content">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 mx-36 ${activeTabOption === tab.id ? "block" : "hidden"}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            
          </div>
        ))}
      </div> */}
    </>
  );
};

export default MyPageHistory;
