import profileImg from "../assets/dummy-profile-icon.png";

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Button from "../components/Button.jsx";

import ProfileTabs from "../components/Profile/ProfileTabs.jsx";
import ProfileHistoryTab from "../components/Profile/ProfileHistoryTab/ProfileHistoryTab.jsx";
import ProfileUserInfo from "../components/Profile/ProfileUserInfo/ProfileUserInfo.jsx";
import ProfileUserInfoAxios from "../components/Profile/ProfileUserInfo/ProfileUserInfoAxios.js";
import ProfileUserSearchTab from "../components/Profile/ProfileUserSearchTab/ProfileUserSearchTab.jsx";

// Date converted to YYYY. MM. DD format
const handleDate = (strDate) => {
  const date = new Date(strDate);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const priceFormat = (str) => {
  const comma = (str) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };
  const uncomma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  };
  return comma(uncomma(str));
};

const Profile = () => {
  const params = useParams();
  const userId = params.id;
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    setUserInfo(() => ProfileUserInfoAxios(userId));
  }, []);

  // console.log(userInfo);
  // useEffect(() => {
  //   console.log(userInfo);
  // }, [userInfo]);

  // const userInfo = {
  //   nickname: "0.쑤",
  //   rank: "23",
  //   rating: "+2340",
  //   tier: "플래티넘 5",
  //   profileImg: profileImg,
  // };

  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  return (
    <>
      <section>
        <div className="bg-red-200">{userInfo && userInfo.nickname}</div>
        {/* <div className="relative bg-red-200"> */}
        <div className="relative">
          {/* <div className="bg-yellow3 h-28">{params.id}의 프로필 페이지~!!</div> */}
          <div className="bg-yellow3 h-28">프로필 페이지~!!</div>
          <div className="h-44"></div>
          <div className="flex flex-row justify-between">
            <div className="absolute top-0 left-40">
              <ProfileUserInfo userInfo={userInfo} />
            </div>
            <div className="absolute bottom-10 right-40">
              <Button text={"라이벌 등록"} color={"yellow3"} />
              {/* <button className="absolute bottom-10 right-40">라이벌 등록</button> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProfileTabs getActiveTabOption={getActiveTabOption} />
      </section>
      <section>
        {/* <p>{console.log(activeTabOption)}</p> */}
        {activeTabOption === "history" ? (
          <ProfileHistoryTab
            userInfo={userInfo}
            activeTabOption={activeTabOption}
            handleDate={handleDate}
            priceFormat={priceFormat}
          />
        ) : (
          <>
            <ProfileUserSearchTab
              handleDate={handleDate}
              priceFormat={priceFormat}
            />
          </>
        )}
      </section>
    </>
  );
};
export default Profile;
