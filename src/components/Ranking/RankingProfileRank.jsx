import React from "react";

const RankingProfileRank = ({ rank, parameter }) => {
  return (
    <>
      <div className="flex-1 content-center">
        <div className="flex justify-center items-baseline">
          <span className="text-4xl font-bold">{rank}위</span>
          <span className="text-lg">/ {parameter}명</span>
        </div>
      </div>
    </>
  );
};

export default RankingProfileRank;
