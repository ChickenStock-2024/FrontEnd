import React, { useState } from "react";
import RankingTab from "../components/Ranking/RankingTab";
import AllRanking from "../components/Ranking/AllRanking";

const Ranking = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  console.log(activeTabOption);

  return (
    <div className="mt-10 mx-24">
      랭킹페이지
      <RankingTab getActiveTabOption={getActiveTabOption} />
      <div></div>
      <AllRanking activeTabOption={activeTabOption} />
    </div>
  );
};

export default Ranking;
