import React from "react";
import { useState, useEffect } from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";
import { defaultInstance } from "../../api/axios";

const RivalRanking = () => {
  const memberList2 = [
    {
      member_id: 1,
      rank: "11",
      nickname: "치킨도리",
      sum: "2948476",
      rating: "2946",
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
    {
      member_id: 3,
      rank: "13",
      nickname: "DAOU사업부",
      sum: "1646352",
      rating: "2800",
      competition_count: "10",
    },
    {
      member_id: 8,
      rank: "20",
      nickname: "유니콘",
      sum: "4538296",
      rating: "2392",
      competition_count: "8",
    },
    {
      member_id: 1,
      rank: "11",
      nickname: "치킨도리",
      sum: "2948476",
      rating: "2946",
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
  // const memberListLength = 100;

  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    getRankingRival();
  }, []);

  const getRankingRival = async () => {
    try {
      const response = defaultInstance.get("/ranking/rival", {
        params: { offset: 1 },
      });
      console.log(response.data);
      setMemberList((await response).data.member_list);
      console.log(memberList);
    } catch (error) {
      console.log(error);
      console.log(memberList);
    }
  };

  return (
    <div className="min-w-max">
      {/* 친구 리스트의 길이 넘겨주기 */}
      <RankingProfile parameter={`친구 ${memberList.length}`} />
      {/* <RankingList memberList={memberList} /> */}
    </div>
  );
};
export default RivalRanking;
