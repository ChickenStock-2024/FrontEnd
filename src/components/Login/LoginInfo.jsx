import React from "react";
import financialIllustration from "../../assets/financial_illustration.png";

const LoginInfo = () => {
  return (
    <div className="px-16">
      <div className="w-2/3 mx-auto">
        <img src={financialIllustration} alt="로그인 페이지에 들어가는 그림" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-5 min-w-max">
          간편하고 재미있는 모의 주식, 치킨스톡
        </h2>
        <p className="leading-8">
          주식 투자, 이제는 재미있게!
          <br />
          친구들과 함께 경쟁하고, 성과를 비교하며 투자 전략을 발전시켜 보세요!
        </p>
      </div>
    </div>
  );
};

export default LoginInfo;
