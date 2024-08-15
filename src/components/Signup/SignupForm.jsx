import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { defaultInstance } from "../../api/axios";

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
  // -> checkedData는 각각의 axios가 끝난 후, try문 안에서 값 변경

  // # 2.3. checkedData 구조분해 할당
  const {
    isNicknameChecked,
    isEmailChecked,
    isSuccessed,
    checkedNickname,
    checkedEmail,
  } = checkedData;

  // # 3. 닉네임 중복 검사 axios
  const getNicknameChecked = async () => {
    try {
      // console.log("닉네임 중복 검사 전: ", checkedData);

      // Axios의 응답 객체에서 직접 checkedNickname 추출
      const response = await defaultInstance.get(`/auth/nickname/${nickname}`);
      const checkedNickname = response.data.nickname;

      alert("닉네임 중복 확인 완료~!!");
      // console.log("중복 확인 완료 닉네임: ", checkedNickname);

      // 진행 상태 업데이트
      setCheckedData({
        ...checkedData,
        isNicknameChecked: true,
        checkedNickname: checkedNickname,
      });
    } catch (error) {
      console.log(error);
      alert(
        "닉네임 중복 확인 중 오류: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  // # 4. 이메일 중복 검사 axios
  const getEmailChecked = async () => {
    try {
      // console.log("이메일 중복 검사 전: ", checkedData);

      // Axios의 응답 객체에서 직접 checkedEmail 추출
      const response = await defaultInstance.get(`/auth/email/${email}`);
      const checkedEmail = response.data.email;

      alert("이메일 중복 확인 완료~!!");
      // console.log("중복 확인 완료 이메일: ", checkedEmail);

      // 진행 상태 업데이트
      setCheckedData({
        ...checkedData,
        isEmailChecked: true,
        checkedEmail: checkedEmail,
      });
    } catch (error) {
      console.log(error);
      alert(
        "이메일 중복 확인 중 오류: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  // # 5. 회원가입 axios
  const postSignup = async () => {
    try {
      // console.log("회원가입 전: ", userData);

      // # 5.0. Axios의 응답 객체에서 직접 checkedEmail 추출
      const response = await defaultInstance.post("/auth/signup", {
        email: email,
        password: password,
        passwordCheck: passwordCheck,
        nickname: nickname,
      });
      // # 5.1. 회원가입 완료 알림
      alert("회원가입 완료~!!");

      // # 5.2. 진행 상태 업데이트
      setCheckedData({
        ...checkedData,
        // isSuccessed: true,
      });

      // # 5.3. 회원가입 완료 후, 로그인 페이지로 이동!
      nav("/login");
    } catch (error) {
      console.log(error);
      alert(
        "가입에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
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
      postSignup();
    }
  };

  // # 6. kakao 로그인 axios
  const getKakaoLogin = async () => {
    try {
      // console.log("kakao 로그인 전: ");

      // Axios의 응답 객체에서 직접 checkedNickname 추출
      const response = await defaultInstance.get("/auth/login/kakao");

      alert("kakao 로그인 완료~!!");
      // console.log("kakao 로그인 response: ", response);
    } catch (error) {
      console.log(error);
      alert(
        "kakao 로그인 중 오류: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  // 7. 카카오 로그인
  const clickKakao = () => {
    // console.log("카카오 로그인 전");
    window.location.href = `${import.meta.env.VITE_SERVER_ROOT}/api/auth/login/kakao`;
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
              onClick={getNicknameChecked}
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
              onClick={getEmailChecked}
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
        <button onClick={clickKakao}>
          <img src={kakaoSignupImage} />
        </button>
      </div>
    </div>
  );
};
export default SignupForm;
