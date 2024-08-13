import React from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";

const TotalRanking = () => {
  // api 호출해서 멤버리스트를 셋팅
  const memberList = [
    {
      member_id: 12,
      rank: "11",
      nickname: "치킨도리",
      sum: "2948476",
      rating: "1230",
      competition_count: "4",
    },
    {
      member_id: 11,
      rank: "12",
      nickname: "junjun",
      sum: "8743029",
      rating: "1500",
      competition_count: "3",
    },
    {
      member_id: 3,
      rank: "13",
      nickname: "DAOU사업부",
      sum: "1646352",
      rating: "2300",
      competition_count: "10",
    },
    {
      member_id: 8,
      rank: "20",
      nickname: "유니콘",
      sum: "4538296",
      rating: "1500",
      competition_count: "8",
    },
    {
      member_id: 1,
      rank: "11",
      nickname: "ㅇㅇㅇ",
      sum: "2948476",
      rating: "1800",
      competition_count: "4",
    },
    {
      member_id: 5,
      rank: "12",
      nickname: "바나나프레소",
      sum: "8743029",
      rating: "2800",
      competition_count: "3",
    },
  ];

  return (
    <div className="min-w-max">
      {/* 여기서 전체 랭킹 api호출 */}
      {/* 전체 리스트의 길이 넘겨주기 */}
      <RankingProfile parameter={`전체 ${memberList.length}`} />
      <RankingList memberList={memberList} />
    </div>
  );
};

export default TotalRanking;
