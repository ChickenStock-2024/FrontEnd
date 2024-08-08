import React from "react";
import { useState } from "react";
import HomeCompetitionInfo from "../components/Home/HomeCompetitionInfo";
import HomeCenter from "../components/Home/HomeCenter";
import HomeCenterAfterLogin from "../components/Home/HomeCenterAfterLogin";
import HomeCenterAfterLoginJoinCompetition from "../components/Home/HomeCenterAfterLoginJoinCompetition";
import HomeBottom from "../components/Home/HomeBottom";
import Input from "../components/Input";
import Modal from "../components/Modal";
import SettingsModal from "../components/SettingsModal/SettingsModal";

const Home = () => {
  return (
    <>
      <HomeCompetitionInfo />

      {/* 인풋 예시 */}
      {/* <div className="w-40">
        <Input placeholder={"검색"} />
      </div> */}

      <div>
        {/* 로그인 & 대회참여 여부에 따라 다르게 렌더링 */}
        {/* 어떻게 구현 할지 생각???? */}
        <HomeCenter />
        {/* <HomeCenterAfterLogin /> */}
        {/* <HomeCenterAfterLoginJoinCompetition /> */}
        <HomeBottom />
      </div>
    </>
  );
};

export default Home;
