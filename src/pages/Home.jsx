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
    <div className="flex flex-col h-screen pt-24">
      <div className="flex-none">
        <HomeCompetitionInfo />
      </div>
      <div className="flex-none">
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
      </div>
      <div className="flex-1">
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;
