import React, { useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { calculateTier } from "../../utils/tierCalculator";

import TierBadge from "../TierBadge";
// import tierBadgeIcon from "../../assets/Gold.svg";

import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";
import NotificationFcmTokenAxios from "../Notification/NotificationFcmTokenAxios";

const HomeCenterIngCompetitionAfterLoginIsCompParticipant = () => {
  // 데이터
  const title = useCompetitionInfoStore((state) => state.competitionInfo.title);
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  const memberId = useLoginUserInfoStore(
    (state) => state.loginUserInfo.loginId
  );
  const tier = calculateTier(loginUserInfo.rating);
  const nav = useNavigate();
  const onClick = () => {
    nav("/trading/005930");
    // 대회페이지로 nav
  };

  useEffect(() => {
    // # 2.0.1. femToken Axios
    NotificationFcmTokenAxios(memberId);
  }, []);
  return (
    <div className="py-20 w-1/2 mx-auto">
      <div className="text-xl font-bold flex items-center">
        <div className=" w-8 h-8 ml-1 mr-2">
          <TierBadge tier={tier} />
        </div>
        {/* <img
          className="rounded-full w-8 h-8 mr-2"
          src={tierBadgeIcon}
          alt="userTierBadge"
        /> */}
        {/* <div className="bg-violet-500 w-8 h-8 rounded-full mr-2">배지</div> */}
        <h3>{loginUserInfo.nickname}</h3>
      </div>
      <div className="my-5 flex flex-col gap-2">
        <div className="text-lg font-semibold"></div>
        <div className="text-xl font-bold">{title} 진행 중</div>{" "}
        <div className="flex flex-col gap-1">
          <p className="text-md">
            수익률: {(loginUserInfo.balance - 50000000) / 500000}%
          </p>
          <p className="text-md">
            계좌 잔고: {loginUserInfo.balance.toLocaleString()}원
          </p>
        </div>
      </div>
      <Button text={"대회 페이지로"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterIngCompetitionAfterLoginIsCompParticipant;
