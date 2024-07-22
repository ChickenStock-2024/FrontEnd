import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const HomeCenterAfterLogin = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/trading");
    // 대회로 nav
  };

  // 데이터
  const contestInfo = {
    title: "XX회 정기대회",
  };

  return (
    <div className="px-40 py-20 min-w-min">
      <div className="my-5">
        <div className="text-xl font-bold">{contestInfo.title} 진행 중</div>
        <div>지금 바로 참여하세요.</div>
      </div>
      <Button text={"참여하기"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterAfterLogin;
