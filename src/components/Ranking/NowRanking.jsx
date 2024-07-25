import React from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";

const NowRanking = () => {
  const memberListLength = 60;
  return (
    <div>
      {/* 여기서 현재 대회 랭킹 api호출 */}
      {/* 현재 대회 리스트의 길이 넘겨주기 */}
      <RankingProfile parameter={`참여자 ${memberListLength}`} />
      {/* <RankingList /> */}
    </div>
  );
};
export default NowRanking;
