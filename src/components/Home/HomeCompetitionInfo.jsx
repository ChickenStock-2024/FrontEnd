import React from "react";

const HomeCompetitionInfo = () => {
  const contestInfo = {
    startDate: "24년 7월 11일 09:00",
    endDate: "24년 7월 16일 15:00",
  };
  return (
    <div className="bg-yellow3 text-center p-4">
      <p>
        📢이번 대회 기간: {contestInfo.startDate} ~ {contestInfo.endDate}
      </p>
    </div>
  );
};

export default HomeCompetitionInfo;
