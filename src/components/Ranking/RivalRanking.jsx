import React from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";

const RivalRanking = () => {
  const memberListLength = 100;
  return (
    <div>
      {/* 여기서 친구 랭킹 api호출 */}
      {/* 친구 리스트의 길이 넘겨주기 */}
      <RankingProfile parameter={`친구 ${memberListLength}`} />
      {/* <RankingList /> */}
    </div>
  );
};
export default RivalRanking;
