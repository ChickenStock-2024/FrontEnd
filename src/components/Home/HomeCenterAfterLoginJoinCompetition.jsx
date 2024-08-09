import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";

const HomeCenterAfterLoginJoinCompetition = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/trading/1");
    // 대회로 nav
  };

  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);

  return (
    <div className="px-72 py-20 min-w-min">
      <div className="text-xl font-bold flex items-center">
        <div className="bg-violet-500 w-8 h-8 rounded-full mr-2 text-sm">
          {loginUserInfo.profileImg}
        </div>
        <h3>{loginUserInfo.nickname}</h3>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold"></div>
        <p>순위: {loginUserInfo.rank}위(▼3)</p>
        <p>수익률: 0%</p>
        <p>계좌 잔고: {loginUserInfo.balance.toLocaleString()}원</p>
      </div>
      <Button text={"참여하기"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterAfterLoginJoinCompetition;
