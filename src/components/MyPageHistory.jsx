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
const competition = {
  title: "정기 1차 대회",
  start_at: "24-07-22",
  end_at: "24-07-26",
};
const rating = {
  rank: "23",
  latestRating: "+2340",
  earningRate: "30",
  earnings: "300,000",
};

const MyPageHistory = ({ activeTabOption }) => {
  return (
    <>
      <h1>MyPage의 대회 참여 히스토리 입니당~!!</h1>
      <div id="default-tab-content">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 mx-36 ${activeTabOption === tab.id ? "block" : "hidden"}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <p className=" flex flex-col justify-between">
              <span className="block">
                <div className="text-xl">{competition.title}</div>
                <div className="text-xs">
                  기간: {competition.start_at} ~ {competition.end_at}
                </div>
              </span>
              <span className="block">
                <div>순위: {rating.rank}위</div>
                <div>레이팅: {rating.latestRating}</div>
                <div>
                  수익률: {rating.earningRate}% ({rating.earnings})
                </div>
              </span>
              <hr />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyPageHistory;
