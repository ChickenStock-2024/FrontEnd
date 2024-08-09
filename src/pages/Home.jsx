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

import useLoginUserInfoStore from "../store/useLoginUserInfoStore";

const Home = () => {
  const isLogined = useLoginUserInfoStore(
    (state) => state.loginUserInfo.isLogined
  );
  console.log(isLogined);

  const isJoined = useLoginUserInfoStore(
    (state) => state.loginUserInfo.isJoined
  );
  console.log(isJoined);

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
        {isLogined ? (
          isJoined ? (
            <HomeCenterAfterLoginJoinCompetition />
          ) : (
            <HomeCenterAfterLogin />
          )
        ) : (
          <HomeCenter />
        )}

        <HomeBottom />
      </div>
    </>
  );
};

export default Home;
