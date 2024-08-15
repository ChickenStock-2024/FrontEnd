import React from "react";
import { useState, useEffect } from "react";

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

// Date converted to YYYY. MM. DD format
const handleDate = (strDate) => {
  const date = new Date(strDate);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const Home = () => {
  // const check = window.localStorage.getItem("checkKaKaoUser");
  // const checkObj = JSON.parse(check);
  // console.log(checkObj);
  // const checkKaKaoUser = checkObj.checkKaKaoUser;
  // console.log("checkKaKaoUser", checkKaKaoUser);

  // if (checkKaKaoUser === true) {
  //   window.location.reload();
  // }
  const ingCompetition = useCompetitionInfoStore(
    (state) => state.competitionInfo.ingCompetition
  );
  // console.log("ingCompetition: ", ingCompetition);

  const isLogined = useLoginUserInfoStore(
    (state) => state.loginUserInfo.isLogined
  );
  // console.log("isLogined: ", isLogined);

  const isCompParticipant = useLoginUserInfoStore(
    (state) => state.loginUserInfo.isCompParticipant
  );
  // console.log("isCompParticipant: ", isCompParticipant);

  return (
    <div className="flex flex-col h-screen pt-24">
      <div className="flex-none">
        <HomeCompetitionInfo handleDate={handleDate} />
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
