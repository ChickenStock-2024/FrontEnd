import React from "react";
import financialImg from "./../../assets/financial_illustration.png";

const HomeBottom = () => {
  return (
    <div className="bg-gray-100 h-full pt-10">
      <div className="flex gap-20 justify-center">
        <div className="min-w-40 max-w-60 border border-red-200">
          <img src={financialImg} alt="financial image" />
        </div>
        <div className="border border-red-200 content-center max-w-xl">
          <h2 className="text-2xl font-bold mb-5">
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

export default HomeBottom;
