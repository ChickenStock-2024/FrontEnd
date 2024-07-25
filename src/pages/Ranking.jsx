import React, { useState } from "react";
import RankingTabs from "../components/Ranking/RankingTabs";
import TotalRanking from "../components/Ranking/TotalRanking";
import RivalRanking from "../components/Ranking/RivalRanking";
import NowRanking from "../components/Ranking/NowRanking";

const Ranking = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  // console.log(activeTabOption);

  const SelectedRanking = (tabOption) => {
    switch (tabOption) {
      case "totalRanking":
        return <TotalRanking />;
      case "rivalRanking":
        return <RivalRanking />;
      case "nowRanking":
        return <NowRanking />;
      default:
        null;
    }
  };

  return (
    <div className="mt-10 mx-24">
      <RankingTabs getActiveTabOption={getActiveTabOption} />
      {SelectedRanking(activeTabOption)}
    </div>
  );
};

export default Ranking;
