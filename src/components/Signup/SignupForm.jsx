import React from "react";
import SignupFormAxios from "./SignupFormAxios";
import { useState } from "react";

import LogoNameImage from "../../assets/logoName.svg";
import kakaoSignupImage from "../../assets/kakaoSignup.svg";

const SignupForm = () => {
  // 가입 정보
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    password: "",
    password_check: "",
  });

  // 입력값 바뀔 때마다 저장하기
  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password_check) {
      alert("비밀번호 확인란을 다시 확인해주세요");
    } else {
      SignupFormAxios({ userData });
      // <SignupFormAxios
      //   nickname={nickname}
      //   email={email}
      //   password={password}
      //   password_check={password_check}
      // />;
      // axios({
      //   method: "POST",
      //   url: "/auth/signup",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   responseType: "json",
      //   data: {
      //     email: email,
      //     password: password,
      //     password_check: password_check,
      //     nickname: nickname,
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     // sessionStorage에 토큰, 이메일, 닉네임, 로그인유무를 저장
      //     sessionStorage.setItem("token", data.token);
      //     sessionStorage.setItem("email", data.email);
      //     sessionStorage.setItem("nickname", data.nickname);
      //     sessionStorage.setItem("isLogin", true);
      //     // sessionStorage에 저장된 search 값을 가져옴
      //     console.log(window.sessionStorage.getItem("email"));
      //     // alert(`안녕하세요, ${response.data.nickname}님`);
      //     if (data.hedaers.token) {
      //       // 회원가입 성공시 메인 페이지로!
      //       nav("/");
      //     } else {
      //       alert("이메일 혹은 패스워드를 확인해주세요.");
      //     }
      //   })
      //   .catch((error) => {
      //     alert(error.message);
      //   });
      // alert("회원가입 완료~!!");
    }
  };
  const { nickname, email, password, password_check } = userData;
  return (
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
            htmlFor="nickname"
          >
            닉네임
          </label>
          <div className="w-72 h-12 flex">
            <input
              className="flex-1 border-2 border-gray-200 rounded-md mt-1"
              type="text"
              placeholder="닉네임"
              id="nickname"
              value={nickname}
              onChange={handleInput}
              required
            />
            <button className="h-10 mt-1 ml-2 px-1 bg-yellow3 rounded-md text-sm">
              중복확인
            </button>
          </div>
        </div>
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="email"
          >
            이메일
          </label>
          <div className="w-72 h-12 flex">
            <input
              className="flex-1 border-2 border-gray-200 rounded-md mt-1"
              type="email"
              placeholder="이메일"
              id="email"
              value={email}
              onChange={handleInput}
              required
            />
            <button className="h-10 mt-1 ml-2 px-1 bg-yellow3 rounded-md text-sm">
              중복확인
            </button>
          </div>
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
            onChange={handleInput}
            required
          />
        </div>
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="password_check"
          >
            비밀번호 확인
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="password"
            placeholder="비밀번호 확인"
            id="password_check"
            value={password_check}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <button className="w-72 h-11 bg-yellow3 rounded-md">가입하기</button>
        </div>
      </form>

      {/* 간편회원가입 line */}
      <div className="w-72 flex items-center text-center font-semibold text-sm text-gray-400">
        <hr className="w-full" />
        <div className="min-w-max">
          <span className="mx-2">간편 회원가입</span>
        </div>
        <hr className="w-full" />
      </div>

      {/* 카카오  회원가입 */}
      <div className="w-72 flex justify-center h-11 items-center">
        <button>
          <img src={kakaoSignupImage} />
        </button>
      </div>
    </div>
  );
};
export default SignupForm;
