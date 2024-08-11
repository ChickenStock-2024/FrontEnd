import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";

const HomeCenterIngCompetitionAfterLoginNotCompParticipant = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/trading/1");
    // 대회로 nav
  };

  // 데이터
  const title = useCompetitionInfoStore((state) => state.competitionInfo.title);

  return (
    <div className="px-72 py-20 min-w-min">
      <div className="my-5">
        <div className="text-xl font-bold">{title} 진행 중</div>
        <div>지금 바로 참여하세요.</div>
      </div>
      <Button text={"참여하기"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterIngCompetitionAfterLoginNotCompParticipant;
