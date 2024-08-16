// import profileImg from "../assets/dummy-profile-icon.png";

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { defaultInstance } from "../api/axios.jsx";
import { calculateTier } from "../utils/tierCalculator.js";

import useLoginUserInfoStore from "../store/useLoginUserInfoStore.js";
import useProfilePageInfoStore from "../store/useProfilePageInfoStore.js";

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

  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };

  // # 2. 프로필 페이지 렌더링 시,
  const getUserInfo = async () => {
    try {
      // # 2.0. Axios의 응답 객체에서 프로필 페이지 profilePageInfo 추출
      const response1 = await defaultInstance.get(`/user/${profilePageId}`);
      // console.log("프로필 페이지 profilePageInf response: ", response1);

      // # 3.0. Axios의 응답 객체에서 직접 isRival 추출
      const response2 = await defaultInstance.get(`/rival/${profilePageId}`);
      // console.log("isRival response: ", response2);
      setProfilePageInfo({
        profilePageMemberId: response1.data.memberId,
        nickname: response1.data.nickname,
        rating: response1.data.rating,
        tier: calculateTier(response1.data.rating),
        profileImg: response1.data.imgUrl,
        isRival: response2.data.isRival,
      });

      // # 3.1. getUserInfo 추출 완료 알림
      // alert("라이벌 데이터와 profilePageInfo 가져오기 완료~!!");
    } catch (error) {
      alert(
        // "라이벌 데이터와 profilePageInfo 가져오기에 실패했습니다: " +
        "프로필 페이지 로딩에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
    // console.log("profilePageInfo", profilePageInfo);
    // try {
    //   // // # 2.0. getUserInfo Axios
    //   // const response1 = await defaultInstance.get(`/user/${profilePageId}`);
    //   // // # 2.1. Axios의 응답 객체에서 프로필 페이지 profilePageInfo 추출
    //   // setProfilePageInfo({
    //   //   ...profilePageInfo,
    //   //   profilePageMemberId: response1.data.memberId,
    //   //   nickname: response1.data.nickname,
    //   //   rating: response1.data.rating,
    //   //   tier: calculateTier(response1.data.rating),
    //   //   profileImg: response1.data.imgUrl,
    //   // });
    //   // // # 2.2. profilePageInfo 가져오기 완료 알림
    //   // alert("getUserInfo 완료");
    //   // alert("profileImg: ", profilePageInfo.profileImg);
    // } catch (error) {
    //   alert(
    //     "프로필 페이지 로딩에 필요한 정보 조회에 실패했습니다: " +
    //       (error.response ? error.response.data.message : error.message)
    //   );
    // }
    try {
      // # 4.0. Axios의 응답 객체에서 직접 competitionItems 추출
      const response3 = await defaultInstance.get(
        `/competition/all/${profilePageId}`
      );
      await setCompetitionItems(response3.data);
      // # 4.1. Axios getCompetitionAll 완료 알림
      // alert("대회 데이터 전체 가져오기 완료~!!");
    } catch (error) {
      alert(
        "프로필 페이지 로딩에 실패했습니다: " +
          // "대회 데이터 전체 가져오기에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  const deleteRival = async () => {
    try {
      // console.log(profilePageInfo.isRival);
      const response = await defaultInstance.delete(`/rival/${profilePageId}`);
      // console.log("deleteRival response: ", response);
      await setProfilePageInfo({
        ...profilePageInfo,
        isRival: false,
      });
      // console.log(profilePageInfo.isRival);
      alert("라이벌 삭제 완료");
    } catch (error) {
      alert(
        "라이벌 삭제에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  const postRival = async () => {
    try {
      // console.log(profilePageInfo.isRival);
      const response = await defaultInstance.post(`/rival/${profilePageId}`);
      // console.log("postRival response: ", response);
      await setProfilePageInfo({
        ...profilePageInfo,
        isRival: true,
      });

      alert("라이벌 등록 완료");
    } catch (error) {
      alert(
        "라이벌 등록에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  const clickRivalDelete = () => {
    deleteRival();
  };

  const clickRivalPost = () => {
    postRival();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("접속한 profilePageId: ", profilePageId);
    // console.log("접속한 유저 loginId: ", loginId);
    clearProfilePageInfo();
    clearCompetitionItems();
    getUserInfo(profilePageId);
  }, [profilePageId]);

  return (
    <div className="pt-24">
      <section>
        {/* <div className="bg-red-200">{userInfo && userInfo.nickname}</div> */}
        {/* <div className="relative bg-red-200"> */}
        <div className="relative">
          {/* <div className="bg-yellow3 h-28">{params.id}의 프로필 페이지~!!</div> */}
          <div className="bg-yellow3 h-28">
            {/* {profilePageId}번 유저의 프로필 페이지~!! 로그인 유저: {loginId}번
            유저 */}
            {/* {loginUserInfo.isLogined}
            {loginUserInfo.loginId} */}
          </div>
          <div className="h-44"></div>
          <div className="flex flex-row justify-between">
            <div className="absolute top-4 left-40 font-yellow2">
              <ProfileUserInfo />
            </div>

            <div className="absolute bottom-10 right-40">
              {profilePageId == loginId ? (
                ""
              ) : profilePageInfo.isRival ? (
                <Button
                  text={"라이벌 삭제"}
                  color={"yellow3"}
                  onClick={clickRivalDelete}
                />
              ) : (
                <Button text={"라이벌 등록"} onClick={clickRivalPost} />
              )}
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
