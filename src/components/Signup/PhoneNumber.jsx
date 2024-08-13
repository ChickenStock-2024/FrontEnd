import React from "react";
import PhoneInput from "react-phone-number-input/input";
import { useState } from "react";
// import { Link } from "react-router-dom";

import LogoNameImage from "../../assets/logoName.svg";
import kakaoSignupImage from "../../assets/kakaoSignup.svg";

// 전화번호 형식을 검증하는 함수
const validatePhoneNumber = (phoneNumber) => {
  // 'KR' 국가 코드를 사용하는 경우
  const phoneRegex = /^(\+82|0)1[0-9]{1}[0-9]{4}[0-9]{4}$/;
  return phoneRegex.test(phoneNumber);
};

const SignupForm = () => {
  // const { nickname, email, phoneNumber, password, password_check } = userData;
  const { nickname, email, password, password_check } = userData;

  // 가입 정보
  const [phoneNumber, setPhoneNumber] = useState();
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    // phoneNumber: "",
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   {
  //     password === password_check
  //       ? alert("회원가입 완료~!!")
  //       : alert("비밀번호 확인란을 다시 확인해주세요");
  //   }
  //   // alert(nickname);
  //   // alert(email);
  //   // alert(phoneNumber);
  //   // alert(password);
  //   // alert(password_check);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!validatePhoneNumber(phoneNumber)) {
    //   alert("전화번호 형식이 올바르지 않습니다. (예: 010-0000-0000)");
    //   return;
    // }

    if (password !== password_check) {
      alert("비밀번호 확인란을 다시 확인해주세요");
    } else {
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
          sessionStorage.setItem("isLogined", true);
          // sessionStorage에 저장된 search 값을 가져옴
          console.log(window.sessionStorage.getItem("email"));
          // alert(`안녕하세요, ${response.data.nickname}님`);
          if (data.hedaers.token) {
            // 회원가입 성공시 메인 페이지로!
            nav("/");
          } else {
            alert("이메일 혹은 패스워드를 확인해주세요.");
          }
        })
        // .catch((error) => alert(error.message));
        .catch((error) => {
          alert(error.message);
        });

      setEmail("");
      setPassword("");
      alert("회원가입 완료~!!");
    }
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
            htmlFor="nickname"
          >
            닉네임
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="text"
            placeholder="닉네임"
            id="nickname"
            value={nickname}
            onChange={handleInput}
            required
          />
        </div>
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
            onChange={handleInput}
            required
          />
        </div>
        {/* <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="phoneNumber"
          >
            전화번호
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="tel"
            country="KR"
            placeholder="전화번호"
            id="phoneNumber"
            value={phoneNumber}
            required
          />
          <PhoneInput
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            country="KR"
            placeholder="전화번호"
            id="phoneNumber"
            value={phoneNumber}
            onChange={setPhoneNumber}
            maxLength="13"
            minLength="13"
            required
          />
        </div> */}
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
