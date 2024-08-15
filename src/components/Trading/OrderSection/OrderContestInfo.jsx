import React from "react";
import useCompetitionInfoStore from "../../../store/useCompetitionInfoStore";

const contestInfo = {
  title: "정기 2차 대회",
  startDate: "24. 07. 22",
  endDate: "24. 07. 26",
};

const OrderContestInfo = () => {
  const competitionInfo = useCompetitionInfoStore(
    (state) => state.competitionInfo
  );
  return (
    <div className="px-4 pt-1">
      <div className="flex justify-between">
        <div className="text-lg">📈 {competitionInfo.title}</div>
        <div className="text-sm text-right pt-5">
          기간: {competitionInfo.startAt.slice(0, 10)} ~{" "}
          {competitionInfo.endAt.slice(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default OrderContestInfo;
