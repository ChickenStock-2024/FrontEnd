import React from "react";

const AllRanking = ({ activeTabOption }) => {
  switch (activeTabOption) {
    case "allRanking":
      return <div className="bg-rose-200">전체 랭킹</div>;
    case "rivalRanking":
      return <div className="bg-rose-300">친구 랭킹</div>;
    default:
      return <div className="bg-rose-400">실시간 랭킹</div>;
  }

  // if (activeTabOption === "allRanking") {
  //   return <div className="bg-rose-200">전체 랭킹</div>;
  // } else {
  //   return <div className="bg-slate-200">친구 랭킹</div>;
  // }
};

export default AllRanking;
