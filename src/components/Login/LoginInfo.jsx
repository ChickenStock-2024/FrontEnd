import React from "react";
import financialIllustration from "../../assets/financial_illustration.png";

const LoginInfo = () => {
  return (
    <div className="px-16">
      <section>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={financialIllustration}
            alt="로그인 페이지에 들어가는 그림"
          />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-5">
          재미있는 모의주식투자 치킨스톡
        </h2>
        <p>
          서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스
          소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개
          서비스 소개 서비스 소개
        </p>
      </section>
    </div>
  );
};

export default LoginInfo;
