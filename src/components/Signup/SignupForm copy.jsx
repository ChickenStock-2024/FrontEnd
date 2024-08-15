import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignupFormAxios from "./SignupFormAxios";
import SignupFormNicknameCheckAxios from "./SignupFormNicknameCheckAxios";
import SignupFormEmailCheckAxios from "./SignupFormEmailCheckAxios";

import LogoNameImage from "../../assets/logoName.svg";
import kakaoSignupImage from "../../assets/kakaoSignup.svg";

const SignupForm = () => {
  const nav = useNavigate();

  // # 1.1. userData 상태관리
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  // # 1.2. userData 바뀔 때마다 저장하기
  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  // # 1.3. userData 구조분해 할당
  const { nickname, email, password, passwordCheck } = userData;

  // # 2.1. checkedData 상태관리
  const [checkedData, setCheckedData] = useState({
    isNicknameChecked: false,
    isEmailChecked: false,
    isSuccessed: false,
    checkedNickname: "",
    checkedEmail: "",
  });

  // # 2.2. checkedData 바뀔 때마다 저장하기
  // -> checkedData는 각각의 axios안에서 값 변경

  // # 2.3. checkedData 구조분해 할당
  const {
    isNicknameChecked,
    isEmailChecked,
    isSuccessed,
    checkedNickname,
    checkedEmail,
  } = checkedData;
  // console.log("isNicknameChecked: ", isNicknameChecked);

  // # 3. 닉네임 중복 검사
  const handleNicknameCheck = () => {
    try {
      SignupFormNicknameCheckAxios(nickname, checkedData, setCheckedData);
      if (checkedData.isNicknameChecked === true) {
        alert("사용 가능한 닉네임입니다.");
      } else {
        alert("이미 사용 중인 닉네임입니다.");
      }
    } catch (error) {
      // console.error("닉네임 확인 중 오류:", error);
      alert("닉네임 확인 중 오류가 발생했습니다.");
    }
  };

  // # 4. 이메일 중복 검사
  const handleEmailCheck = () => {
    try {
      SignupFormEmailCheckAxios(email, checkedData, setCheckedData);
      if (checkedData.isEmailChecked === true) {
        alert("사용 가능한 이메일입니다.");
      } else {
        alert("이미 사용 중인 이메일입니다.");
      }
    } catch (error) {
      console.error("이메일 확인 중 오류:", error);
      alert("이메일 확인 중 오류가 발생했습니다.");
    }
  };

  // 5. 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("비밀번호 확인란을 다시 확인해주세요");
    } else if (!isNicknameChecked || nickname != checkedNickname) {
      alert("닉네임 중복 확인이 필요해요");
    } else if (!isEmailChecked || email != checkedEmail) {
      alert("이메일 중복 확인이 필요해요");
    } else {
      SignupFormAxios(userData, checkedData, setCheckedData);
      // SignupFormAxios({ userData });
      // console.log("isSuccessed: ", isSuccessed);
      if (!isSuccessed) {
        // console.log(isSuccessed);
        alert("가입 정보를 다시 입력해주세요");
      } else {
        nav("/login");
      }
    }
  };

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
            />
            <button
              className="h-10 mt-1 ml-2 px-1 bg-yellow3 rounded-md text-sm"
              type="button"
              onClick={handleNicknameCheck}
            >
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
            <button
              className="h-10 mt-1 ml-2 px-1 bg-yellow3 rounded-md text-sm"
              type="button"
              onClick={handleEmailCheck}
            >
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
            htmlFor="passwordCheck"
          >
            비밀번호 확인
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="password"
            placeholder="비밀번호 확인"
            id="passwordCheck"
            value={passwordCheck}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <button
            className="w-72 h-11 bg-yellow3 rounded-md"
            onSubmit={handleSubmit}
          >
            가입하기
          </button>
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
