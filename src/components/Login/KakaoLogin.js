import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";

import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";
import useNotificationInfoStore from "../../store/useNotificationInfoStore";

// window.open(
//   "https://chickenstock.givendragon.site/api/auth/login/kakao",
//   "newWindow"
// );

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

  // // 1. 카카오 로그인 이후 유저 정보 가져오는 axios
  const getInfoAfterKakaoLogin = async () => {
    try {
      console.log("getInfoAfterKakaoLogin 전");
      // # 2.0. Axios의 응답 객체에서 직접 loginUserInfo 추출
      const response = await defaultInstance.get("/api/user");

      console.log("getInfoAfterKakaoLogin response: ", response);

      // # 2.1. loginUserInfo 업데이트
      setLoginUserInfo({
        ...loginUserInfo,
        loginId: response.data.memberId,
        nickname: response.data.nickName,
        isLogined: true,
      });

      setNotificationInfo({
        ...notificationInfo,
        webNotification: response.data.webNoti,
        kakaoNotification: response.data.kakaotalkNoti,
      });

      try {
        // # 2.1. Axios의 응답 객체에서 직접 ingCompetition 추출
        const response = await defaultInstance.get("/competition");

        console.log("현재 대회 개최 유무 response: ", response);

        // # 2.2. ingCompetition 상태 업데이트
        await setCompetitionInfo({
          ...competitionInfo,
          ingCompetition: response.data.ingCompetition,
          competitionId: response.data.competitionId,
          title: response.data.title,
          startAt: response.data.startAt,
          endAt: response.data.endAt,
        });

        console.log("진행 대회 정보 조회 완료: ", competitionInfo);

        // # 2.3. ingCompetition get 완료 후, 메인 페이지로 이동!
        // nav("/");
        window.close();
      } catch (error) {
        console.log(error);
        alert(
          "진행 대회 정보 조회에 실패했습니다: " +
            (error.response ? error.response.data.message : error.message)
        );
      }

      // alert(`안녕하세요, ${response.data.nickname}님`);
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
    // getKakaoLogin();
  }, []);

  //   const getKakaoLogin = async () => {
  //     try {
  //       // window.open("https://chickenstock.givendragon.site/api/auth/login/kakao");
  //       console.log("카카오 로그인 전");
  //       // window.open("http://localhost:5173/kakaoLogin", "popup=yes");
  //       // const options = "width=700, height=600, top=50, left=50, scrollbars=yes";
  //       window.location.href = `${import.meta.env.VITE_SERVER_ROOT}/api/auth/login/kakao`;
  //       alert("카카오 로그인 완료~!!");
  //       // console.log("카카오 로그인 response: ", response);
  //       window.close();

  //       // console.log("카카오 로그인 response: ", response.data);
  //       alert("카카오 로그인 완료~!!");

  //       // // 진행 상태 업데이트

  //       // nav("/");
  //     } catch (error) {
  //       console.log(error);
  //       alert(
  //         "카카오 로그인 중 오류: " +
  //           (error.response ? error.response.data.message : error.message)
  //       );
  //     }
  //   };
};

export default kakaoLogin;
