import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const HomeCenterNoCompetitionAfterLogin = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/ranking");
    // 랭킹으로 nav
  };

  return (
    <div className="py-20 w-1/2 mx-auto">
      <div className="my-5">
        <div className="text-xl font-bold">당신을 위한 모의주식 투자</div>
        <div>치킨스톡에서 시작하세요 🐣</div>
      </div>
      <Button text={"지난 대회 랭킹 보기"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterNoCompetitionAfterLogin;