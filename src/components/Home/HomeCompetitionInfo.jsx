import React from "react";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";

const HomeCompetitionInfo = ({ handleDate }) => {
  const competitionInfo = useCompetitionInfoStore(
    (state) => state.competitionInfo
  );

  return (
    <div className="bg-yellow3 text-center p-4">
      <div>
        {competitionInfo.ingCompetition ? (
          <p>
            📢 이번 대회 기간: {handleDate(competitionInfo.startAt)} ~{" "}
            {handleDate(competitionInfo.endAt)}
          </p>
        ) : (
          <p>📢 현재 진행 중인 대회가 없습니다 📢</p>
        )}
      </div>
    </div>
  );
};

export default HomeCompetitionInfo;
