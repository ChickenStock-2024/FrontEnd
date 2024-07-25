import React from "react";

function EachRanking({ user }) {
  return (
    <div>
      <b>{user.rank}</b> <span>({user.nickname})</span>
    </div>
  );
}

const RankingList = ({ memberList }) => {
  console.log(memberList);

  return (
    <div>
      리스트출력부분
      {memberList.map((user, index) => (
        <div key={index}>
          <EachRanking user={user} />
        </div>
      ))}
    </div>
  );
};

export default RankingList;
