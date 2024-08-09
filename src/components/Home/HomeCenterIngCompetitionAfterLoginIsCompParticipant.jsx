import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";

const HomeCenterIngCompetitionAfterLoginIsCompParticipant = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/login");
    // 로그인으로 nav
  };

  // 데이터
  const competitionInfo = useCompetitionInfoStore(
    (state) => state.competitionInfo
  );

  return (
    <div className="px-72 py-20 min-w-min">
      <div className="text-xl font-bold flex items-center">
        <div className="bg-violet-500 w-8 h-8 rounded-full mr-2"></div>
        <h3>유저 닉네임</h3>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold"></div>
        <p>순위: 8위(▼3)</p>
        <p>수익률: 0%</p>
        <p>계좌 잔고: 1,000,000 원</p>
      </div>
      <Button text={"참여하기"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterIngCompetitionAfterLoginIsCompParticipant;
