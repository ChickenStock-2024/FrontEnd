import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";

const HomeCenterIngCompetitionBeforeLogin = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/login");
    // 로그인으로 nav
  };

  // 데이터
  const title = useCompetitionInfoStore((state) => state.competitionInfo.title);

  return (
    <div className="py-20 w-1/2 mx-auto">
      <div className="my-5">
        <div className="text-xl font-bold">{title} 진행 중</div>
        <div>지금 바로 로그인 후 참여하세요.</div>
      </div>
      <Button text={"로그인"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterIngCompetitionBeforeLogin;
