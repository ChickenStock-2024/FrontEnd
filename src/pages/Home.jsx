import React from "react";
import HomeCompetitionInfo from "../components/Home/HomeCompetitionInfo";
import HomeCenter from "../components/Home/HomeCenter";
import HomeCenterAfterLogin from "../components/Home/HomeCenterAfterLogin";
import HomeCenterAfterLoginJoinCompetition from "../components/Home/HomeCenterAfterLoginJoinCompetition";
import HomeBottom from "../components/Home/HomeBottom";

const Home = () => {
  return (
    <>
      <HomeCompetitionInfo />
      <div className="mx-36">
        {/* 로그인 & 대회참여 여부에 따라 다르게 렌더링 */}
        {/* 어떻게 구현 할지 생각???? */}
        <HomeCenter />
        <HomeCenterAfterLogin />
        <HomeCenterAfterLoginJoinCompetition />
        <HomeBottom />
      </div>
    </>
  );
};

export default Home;
