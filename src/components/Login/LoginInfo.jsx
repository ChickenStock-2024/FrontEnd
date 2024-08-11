import React from "react";
import financialIllustration from "../../assets/financial_illustration.png";

const LoginInfo = () => {
  return (
    <div className="px-16">
      <div className="border border-red-200">
        <div className="w-2/3 mx-auto">
          <img
            src={financialIllustration}
            alt="로그인 페이지에 들어가는 그림"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5 min-w-max">
            재미있는 모의주식투자 치킨스톡
          </h2>
          <p className="">
            서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스
            소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개
            서비스 소개 서비스 소개
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;
