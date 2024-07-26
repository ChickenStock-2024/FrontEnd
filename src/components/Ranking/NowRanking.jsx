import React from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";

const NowRanking = () => {
  const memberList = [
    {
      member_id: 1,
      rank: "11",
      nickname: "치킨도리",
      sum: "2948476",
      rating: "2946",
      competition_count: "4",
    },
  ];
  const memberListLength = 60;
  return (
    <div>
      {/* 여기서 현재 대회 랭킹 api호출 */}
      {/* 현재 대회 리스트의 길이 넘겨주기 */}
      <RankingProfile parameter={`참여자 ${memberListLength}`} />
      <RankingList memberList={memberList} />
    </div>
  );
};
export default NowRanking;
