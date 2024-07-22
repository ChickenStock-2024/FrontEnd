import React from "react";
import financialImg from "./../../assets/financial_illustration.png";

const HomeBottom = () => {
  return (
    <div className="flex flex-row justify-between px-20 min-w-min h-full">
      <div className="w-72">
        <img src={financialImg} alt="financial image" />
      </div>
      <div className="w-1/2 content-center">
        <h2 className="text-2xl font-bold mb-5">
          재미있는 모의주식투자 치킨스톡{" "}
        </h2>
        <p>
          서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스
          소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개 서비스 소개
          서비스 소개 서비스 소개
        </p>
      </div>
    </div>
  );
};

export default HomeBottom;
