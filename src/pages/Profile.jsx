import profileImg from "../assets/dummy-profile-icon.png";

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { defaultInstance } from "../api/axios.jsx";
import useLoginUserStore from "../store/useLoginUserStore.jsx";

import Button from "../components/Button.jsx";

import ProfileTabs from "../components/Profile/ProfileTabs.jsx";
import ProfileHistoryTab from "../components/Profile/ProfileHistoryTab/ProfileHistoryTab.jsx";
import ProfileUserInfo from "../components/Profile/ProfileUserInfo/ProfileUserInfo.jsx";
// import ProfileUserInfoAxios from "../components/Profile/ProfileUserInfo/ProfileUserInfoAxios.js";
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
  const { profilePageId } = useParams();
  // const loginUserInfo = useLoginUserStore((state) => state.loginUserInfo);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log("현재 접속한 profilePageId: ", profilePageId);
    setUserInfo(() => getUserInfo(profilePageId));
  }, [profilePageId]);

  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  // # 1. 프로필 페이지 렌더링 시,
  const getUserInfo = async () => {
    try {
      console.log("getUserInfo 전: ", userInfo);

      // # 1.0. Axios의 응답 객체에서 프로필 페이지 UserInfo 추출
      const response = await defaultInstance.get(`/user/${profilePageId}`);
      const data = response.data;
      // # 1.1. UserInfo 가져오기 완료 알림
      alert("getUserInfo 완료");
      console.log(data);

      // # 1.2. UserInfo 값 할당
      // sessionStorage에 토큰, 이메일, 닉네임, 로그인유무를 저장
      // userInfo = "nickname", response.headers.token);
      // sessionStorage.setItem("rank", response.data.memberId);
      // sessionStorage.setItem("rating", response.data.nickName);
      // sessionStorage.setItem("tier", true);
    } catch (error) {
      console.log(error);
      alert(
        "프로필 페이지 로딩에 필요한 정보 조회에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <>
      <section>
        {/* <div className="bg-red-200">{userInfo && userInfo.nickname}</div> */}
        {/* <div className="relative bg-red-200"> */}
        <div className="relative">
          {/* <div className="bg-yellow3 h-28">{params.id}의 프로필 페이지~!!</div> */}
          <div className="bg-yellow3 h-28">
            {profilePageId}번 유저의 프로필 페이지~!!
            {/* {loginUserInfo.isLogin}
            {loginUserInfo.loginId} */}
          </div>
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
