import React from "react";
import { Link } from "react-router-dom";
import TierBadge from "../TierBadge";
import { calculateTier } from "../../utils/tierCalculator";

function EachRanking({ user }) {
  const tier = calculateTier(user.rating);
  const cumProfitRate =
    (user.profit / (user.competitionCount * 50000000)) * 100 || 0;
  return (
    <div className="grid grid-cols-4 text-center py-3 items-center">
      <div className="grid grid-cols-4 items-center">
        <div className="font-bold">{user.ranking}위</div>
        {/* 이 부분을 클릭했을 때 각 프로필로 라우팅 되어야 함 */}
        {/* <div className="col-span-3 text-left flex gap-2 items-center"> */}
        <Link
          to={`/profile/${user.memberId}`}
          className="col-span-3 text-left flex gap-2 items-center"
        >
          <div className="w-8 h-8">
            <TierBadge tier={tier} />
          </div>
          {/* <img src={user.imgUrl} alt="" className="rounded-full w-8 h-8" /> */}
          <div>{user.nickname}</div>
        </Link>
        {/* </div> */}
      </div>
      <div>
        {user.profit.toLocaleString()}원 ({cumProfitRate}%)
      </div>
      <div>{user.rating}</div>
      <div>{user.competitionCount}</div>
    </div>
  );
}

const RankingList = ({ memberList }) => {
  // console.log(memberList);

  return (
    <div className="mx-12">
      <div className="grid grid-cols-4 text-center text-lg font-bold py-4 mt-2">
        <div className="grid grid-cols-4">
          <div>순위</div>
          <div className="col-span-3 text-left">닉네임</div>
        </div>
        <div>누적수익금(수익률)</div>
        <div>레이팅</div>
        <div>대회 참여 횟수</div>
      </div>
      <hr />
      {memberList.map((user, index) => (
        <div key={index}>
          <EachRanking user={user} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RankingList;
