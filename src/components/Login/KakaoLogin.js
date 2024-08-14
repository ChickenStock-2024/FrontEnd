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
  // useEffect(() => {
  //   getKakaoLogin();
  // }, []);

  // 4. 카카오 로그인 axios
  const getKakaoLogin = async () => {
    try {
      console.log("카카오 로그인 전");
      // window.open("https://chickenstock.givendragon.site/api/auth/login/kakao");
      // // Axios의 응답 객체에서 직접 checkedEmail 추출
      const response = await defaultInstance.get("/auth/login/kakao");

      alert("카카오 로그인 완료~!!");
      console.log("카카오 로그인 response: ", response.data);

      // // 진행 상태 업데이트

      nav("/");
    } catch (error) {
      console.log(error);
      alert(
        "카카오 로그인 중 오류: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
};

export default kakaoLogin;
