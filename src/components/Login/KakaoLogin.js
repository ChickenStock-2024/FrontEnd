import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";

import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";
import useNotificationInfoStore from "../../store/useNotificationInfoStore";
// import useKakaoLoginCheckStore from "../../store/useKakaoLoginCheckStore";
// import NotificationFcmTokenAxios from "../Notification/NotificationFcmTokenAxios";

const kakaoLogin = () => {
  const nav = useNavigate();
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  const setLoginUserInfo = useLoginUserInfoStore(
    (state) => state.setLoginUserInfo
  );
  const competitionInfo = useCompetitionInfoStore(
    (state) => state.competitionInfo
  );
  const setCompetitionInfo = useCompetitionInfoStore(
    (state) => state.setCompetitionInfo
  );
  const notificationInfo = useNotificationInfoStore(
    (state) => state.notificationInfo
  );
  const setNotificationInfo = useNotificationInfoStore(
    (state) => state.setNotificationInfo
  );
  // const setCheckKaKaoUser = useKakaoLoginCheckStore(
  //   (state) => state.setCheckKaKaoUser
  // );

  // // 1. 카카오 로그인 이후 유저 정보 가져오는 axios
  const getInfoAfterKakaoLogin = async () => {
    try {
      // console.log("getInfoAfterKakaoLogin 전");
      // # 2.0. Axios의 응답 객체에서 직접 loginUserInfo 추출
      const response = await defaultInstance.get(
        `${import.meta.env.VITE_SERVER_ROOT}/api/user`
      );

      // console.log("getInfoAfterKakaoLogin response: ", response);

      // # 2.1. loginUserInfo 업데이트
      setLoginUserInfo({
        ...loginUserInfo,
        accountId: response.data.accountId,
        balance: response.data.balance,
        isCompParticipant: response.data.isCompParticipant,
        rating: response.data.rating,
        loginId: response.data.memberId,
        nickname: response.data.nickname,
        isLogined: true,
      });

      setNotificationInfo({
        ...notificationInfo,
        webNotification: response.data.webNoti,
        kakaoNotification: response.data.kakaotalkNoti,
      });
      // NotificationFcmTokenAxios();

      try {
        // # 2.1. Axios의 응답 객체에서 직접 ingCompetition 추출
        const response = await defaultInstance.get("/competition");

        // console.log("현재 대회 개최 유무 response: ", response);

        // # 2.2. ingCompetition 상태 업데이트
        await setCompetitionInfo({
          ...competitionInfo,
          ingCompetition: response.data.ingCompetition,
          competitionId: response.data.competitionId,
          title: response.data.title,
          startAt: response.data.startAt,
          endAt: response.data.endAt,
        });

        // console.log("진행 대회 정보 조회 완료: ", competitionInfo);

        // # 2.3. ingCompetition get 완료 후, 메인 페이지로 이동!
        window.location.href = "/";
      } catch (error) {
        console.log(error);
        alert(
          "진행 대회 정보 조회에 실패했습니다: " +
            (error.response ? error.response.data.message : error.message)
        );
        nav("/login");
      }
    } catch (error) {
      console.log(error);
      alert(
        "카카오 로그인 이후, 정보 조회에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  useEffect(() => {
    getInfoAfterKakaoLogin();
  }, []);
};

export default kakaoLogin;
