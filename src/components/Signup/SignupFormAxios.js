import React from "react";
import { useEffect } from "react";
import axios from "axios";

const SignupFormAxios = ({ userData }) => {
  const { nickname, email, password, password_check } = userData;

  axios({
    method: "POST",
    url: "/auth/signup",
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
    data: {
      email: email,
      password: password,
      password_check: password_check,
      nickname: nickname,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // sessionStorage에 토큰, 이메일, 닉네임, 로그인유무를 저장
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("nickname", data.nickname);
      sessionStorage.setItem("isLogin", true);
      // sessionStorage에 저장된 search 값을 가져옴
      console.log(window.sessionStorage.getItem("email"));
      // alert(`안녕하세요, ${response.data.nickname}님`);
      if (data.hedaers.token) {
        // 회원가입 성공시 메인 페이지로!
        nav("/");
      } else {
        alert("가입정보를 확인해주세요.");
      }
    })
    .catch((error) => {
      alert(error.message);
    });

  alert("회원가입 완료~!!");
};

export default SignupFormAxios;
