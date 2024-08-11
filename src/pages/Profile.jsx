import profileImg from "../assets/dummy-profile-icon.png";

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { defaultInstance } from "../api/axios.jsx";

import useLoginUserInfoStore from "../store/useLoginUserInfoStore.jsx";
import useProfilePageInfoStore from "../store/useProfilePageInfoStore.jsx";

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

const Profile = () => {
  // # 1.0. 현재 접속한 페이지의 url에서 profilePageId 가져오기
  const { profilePageId } = useParams();

  // # 1.1. 현재 접속한 유저의 loginId 가져오기
  const loginId = useLoginUserInfoStore((state) => state.loginUserInfo.loginId);

  // const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);

  // # 1.2. 다른 유저의 프로필 페이지로 이동시, 기존 profilePageInfo 초기화 후 profilePageInfo 업데이트
  const setProfilePageInfo = useProfilePageInfoStore(
    (state) => state.setProfilePageInfo
  );
  const clearProfilePageInfo = useProfilePageInfoStore(
    (state) => state.clearProfilePageInfo
  );

  // # 1.3. 다른 유저의 프로필 페이지로 이동시, 기존 CompetitionItems 초기화 후 CompetitionItems 업데이트
  const setCompetitionItems = useProfilePageInfoStore(
    (state) => state.setCompetitionItems
  );
  const clearCompetitionItems = useProfilePageInfoStore(
    (state) => state.clearCompetitionItems
  );

  // # 1.4. profilePageInfo 불러오기
  const profilePageInfo = useProfilePageInfoStore(
    (state) => state.profilePageInfo
  );

  useEffect(() => {
    console.log("접속한 profilePageId: ", profilePageId);
    console.log("접속한 유저 loginId: ", loginId);
    clearProfilePageInfo();
    clearCompetitionItems();
    getUserInfo(profilePageId);
  }, [profilePageId]);

  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  // # 2. 프로필 페이지 렌더링 시,
  const getUserInfo = async () => {
    try {
      // # 2.0. getUserInfo Axios
      const response1 = await defaultInstance.get(`/user/${profilePageId}`);
      // # 2.1. Axios의 응답 객체에서 프로필 페이지 profilePageInfo 추출
      await setProfilePageInfo({
        ...profilePageInfo,
        profilePageMemberId: response1.data.memberId,
        nickname: response1.data.nickname,
        tier: response1.data.tier,
        // profileImg: response.data.profileImg,
      });
      // # 2.2. profilePageInfo 가져오기 완료 알림
      alert("getUserInfo 완료");
      console.log(response1);
    } catch (error) {
      console.log(error);
      alert(
        "프로필 페이지 로딩에 필요한 정보 조회에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
    try {
      // console.log(
      //   "프로필 히스토리탭 대회 데이터 가져오기 전 competitionItems: ",
      //   competitionItems
      // );
      console.log(profilePageInfo.profilePageMemberId);
      // # 2.0. Axios의 응답 객체에서 직접 competitionItems 추출
      const response2 = await defaultInstance.get(
        `/competition/all/${profilePageInfo.profilePageMemberId}`
      );
      console.log(response2);
      await setCompetitionItems(response2.data);
      // # 2.1. Axios getCompetitionAll 완료 알림
      alert("대회 데이터 전체 가져오기 완료~!!");
    } catch (error) {
      console.log(error);
      alert(
        "대회 데이터 전체 가져오기에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <div className="pt-24">
      <section>
        {/* <div className="bg-red-200">{userInfo && userInfo.nickname}</div> */}
        {/* <div className="relative bg-red-200"> */}
        <div className="relative">
          {/* <div className="bg-yellow3 h-28">{params.id}의 프로필 페이지~!!</div> */}
          <div className="bg-yellow3 h-28">
            {profilePageId}번 유저의 프로필 페이지~!! 로그인 유저: {loginId}번
            유저
            {/* {loginUserInfo.isLogined}
            {loginUserInfo.loginId} */}
          </div>
          <div className="h-44"></div>
          <div className="flex flex-row justify-between">
            <div className="absolute top-0 left-40">
              <ProfileUserInfo />
            </div>
            <div
              className={`absolute bottom-10 right-40 ${profilePageId == loginId ? "hidden" : ""}`}
            >
              {/* <div className="absolute bottom-10 right-40 "> */}
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
            activeTabOption={activeTabOption}
            handleDate={handleDate}
            profilePageId={profilePageId}
            // priceFormat={priceFormat}
          />
        ) : (
          <>
            <ProfileUserSearchTab
              handleDate={handleDate}
              // priceFormat={priceFormat}
            />
          </>
        )}
      </section>
    </div>
  );
};
export default Profile;
