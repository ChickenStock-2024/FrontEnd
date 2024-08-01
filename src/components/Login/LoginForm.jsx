import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginFormAxios from "./LoginFormAxios";

import LogoNameImage from "../../assets/logoName.svg";
import KaKaoLoginImage from "../../assets/kakaoLogin.svg";

const LoginForm = () => {
  const nav = useNavigate();

  // 로그인 정보(유저가 로그인 창에서 입력한 email, password, fcm토큰)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginFormAxios({ email, password, setEmail, setPassword });
    // axios({
    //   method: "POST",
    //   url: "/auth/login/email",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   responseType: "json",
    //   data: {
    //     email: email,
    //     password: password,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // sessionStorage에 토큰, 이메일, 닉네임, 로그인유무를 저장
    //     sessionStorage.setItem("token", data.token);
    //     sessionStorage.setItem("email", data.email);
    //     sessionStorage.setItem("nickName", data.nickName);
    //     sessionStorage.setItem("isLogin", true);
    //     // sessionStorage에 저장된 search 값을 가져옴
    //     console.log(window.sessionStorage.getItem("email"));
    //     // alert(`안녕하세요, ${response.data.nickName}님`);
    //     if (data.hedaers.token) {
    //       // 로그인 성공시 메인 페이지로!
    //       nav("/");
    //     } else {
    //       alert("이메일 혹은 패스워드를 확인해주세요.");
    //     }
    //   })
    //   // .catch((error) => alert(error.message));
    //   .catch((error) => {
    //     alert(error.message);
    //   });

    // setEmail("");
    // setPassword("");
  };

  return (
    // <div className="flex flex-col w-full items-center justify-center pt-14 pb-20 gap-3 border-2 border-slate-200 rounded-xl">
    <div className="flex flex-col w-full items-center justify-center pt-14 pb-20 gap-3">
      {/* 로고 */}
      <div className="flex w-72 items-center mb-4 md:mb-0">
        <img alt="logo" src={LogoNameImage} />
      </div>

      {/* form */}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="email"
          >
            이메일
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="email"
            placeholder="이메일"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="password"
          >
            비밀번호
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="password"
            placeholder="비밀번호"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="w-72 h-11 bg-yellow3 rounded-md">로그인</button>
        </div>
      </form>

      {/* 비밀번호찾기 회원가입 */}
      <div className="w-72 flex flec-row justify-evenly items-center text-center text-base text-gray-500">
        <div className="flex-1 text-center">비밀번호 찾기</div>
        <span> | </span>
        <div role="button" className="flex-1 text-center">
          <Link to={"/signup"}>
            <div>회원가입</div>
          </Link>
        </div>
      </div>

      {/* 간편로그인 line */}
      <div className="w-72 flex items-center text-center font-semibold text-sm text-gray-400">
        <hr className="w-full" />
        <div className="min-w-max">
          <span className="mx-2">간편로그인</span>
        </div>
        <hr className="w-full" />
      </div>

      {/* 카카오로그인 */}
      <div className="w-72 flex justify-center h-11 items-center">
        <button>
          <img src={KaKaoLoginImage} />
        </button>
      </div>
    </div>
  );
};
export default LoginForm;
