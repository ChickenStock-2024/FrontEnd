import React from "react";

import LogoNameImage from "../../assets/logoName.svg";
import KaKaoLoginImage from "../../assets/kakaoLogin.svg";

const LoginForm = () => {
  return (
    // <div className="flex flex-col w-full items-center justify-center pt-14 pb-20 gap-3 border-2 border-slate-200 rounded-xl">
    <div className="flex flex-col w-full items-center justify-center pt-14 pb-20 gap-3">
      {/* 로고 */}
      <div className="flex w-72 items-center mb-4 md:mb-0">
        <img alt="logo" src={LogoNameImage} />
      </div>

      {/* form */}
      <form className="flex flex-col items-center">
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="id"
          >
            이메일
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="text"
            placeholder="이메일"
            id="id"
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
        <div className="flex-1 text-center">회원가입</div>
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
