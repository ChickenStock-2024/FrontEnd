import React from "react";
import financialImg from "./../../assets/financial_illustration.png";

const HomeBottom = () => {
  return (
    <div className="bg-gray-100 flex justify-between px-56 py-10">
      <div className="flex-1">
        <img src={financialImg} alt="financial image" className="min-w-60" />
      </div>
      <div className="flex-1 content-center">
        <h2 className="text-2xl font-bold mb-5 min-w-max">
          재미있는 모의주식투자 치킨스톡
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
