import React from "react";

import LogoImage from "../../assets/logo.png";
import GoogleImage from "../../assets/google.svg";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 border-2 border-slate-200 rounded-xl">
      {/* 로고 */}
      <div>
        <img src={LogoImage} />
      </div>

      {/* form */}
      <form className="flex flex-col items-center">
        <label htmlFor="id">이메일</label>
        <input type="text" placeholder="이메일" id="id" />

        <label htmlFor="password">비밀번호</label>
        <input type="password" placeholder="비밀번호" id="password" />

        <button className="bg-yellow-200">로그인</button>
      </form>

      {/* 비밀번호찾기 회원가입 */}
      <div className="flex justify-between items-center">
        <div className="flex-1">비밀번호 찾기</div>
        <div className="flex-1">회원가입</div>
      </div>

      {/* 간편로그인 line */}
      <div className="w-full text-center">간편로그인</div>

      {/* 구글로그인 */}
      <div>
        <img src={GoogleImage} />
      </div>
    </div>
  );
};
export default LoginForm;
