import React from "react";
import profileImage from "../../assets/userProfileImage_쑤.png";
import userTierBadge from "../../assets/userTierBadge.png";

function EachRanking({ user }) {
  return (
    <div className="grid grid-cols-4 text-center py-3">
      <div className="grid grid-cols-4">
        <div className="font-bold">{user.rank}위</div>
        {/* 이 부분을 클릭했을 때 각 프로필로 라우팅 되어야 함 */}
        <div className="col-span-3 text-left flex gap-2 items-center">
          <img src={profileImage} alt="" className="rounded-full w-6 h-6" />
          <img src={userTierBadge} alt="" className="rounded-full w-6 h-6" />
          <div>{user.nickname}</div>
        </div>
      </div>
      <div>수익률(수익금)</div>
      <div>{user.rating}</div>
      <div>{user.competition_count}</div>
    </div>
  );
}

const RankingList = ({ memberList }) => {
  console.log(memberList);

  return (
    <div className="mx-12">
      {/* 랭킹 리스트 label -> 글씨 크게, 볼드, 마진*/}
      <div className="grid grid-cols-4 text-center text-lg font-bold py-4 mt-2">
        <div className="grid grid-cols-4">
          <div>순위</div>
          <div className="col-span-3 text-left">닉네임</div>
        </div>
        <div>수익률(수익금)</div>
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
