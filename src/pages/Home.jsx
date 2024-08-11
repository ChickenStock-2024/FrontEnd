import React from "react";
import { useState } from "react";

import HomeCompetitionInfo from "../components/Home/HomeCompetitionInfo";
import HomeCenterIngCompetitionAfterLoginIsCompParticipant from "../components/Home/HomeCenterIngCompetitionAfterLoginIsCompParticipant";
import HomeCenterIngCompetitionAfterLoginNotCompParticipant from "../components/Home/HomeCenterIngCompetitionAfterLoginNotCompParticipant";
import HomeCenterIngCompetitionBeforeLogin from "../components/Home/HomeCenterIngCompetitionBeforeLogin";
import HomeCenterNoCompetitionAfterLogin from "../components/Home/HomeCenterNoCompetitionAfterLogin";
import HomeCenterNoCompetitionBeforeLogin from "../components/Home/HomeCenterNoCompetitionBeforeLogin";

import HomeBottom from "../components/Home/HomeBottom";
import Input from "../components/Input";
import Modal from "../components/Modal";

import useCompetitionInfoStore from "../store/useCompetitionInfoStore";
import useLoginUserInfoStore from "../store/useLoginUserInfoStore";

const Home = () => {
  const ingCompetition = useCompetitionInfoStore(
    (state) => state.competitionInfo.ingCompetition
  );
  console.log("ingCompetition: ", ingCompetition);

  const isLogined = useLoginUserInfoStore(
    (state) => state.loginUserInfo.isLogined
  );
  console.log("isLogined: ", isLogined);

  const isCompParticipant = useLoginUserInfoStore(
    (state) => state.loginUserInfo.isCompParticipant
  );
  console.log("isCompParticipant: ", isCompParticipant);

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

        {ingCompetition ? (
          isLogined ? (
            isCompParticipant ? (
              <HomeCenterIngCompetitionAfterLoginIsCompParticipant />
            ) : (
              <HomeCenterIngCompetitionAfterLoginNotCompParticipant />
            )
          ) : (
            <HomeCenterIngCompetitionBeforeLogin />
          )
        ) : isLogined ? (
          <HomeCenterNoCompetitionAfterLogin />
        ) : (
          <HomeCenterNoCompetitionBeforeLogin />
        )}

        <HomeBottom />
      </div>
    </>
  );
};

export default Home;
