import React, { useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";

import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";
import NotificationFcmTokenAxios from "../Notification/NotificationFcmTokenAxios";

const HomeCenterIngCompetitionAfterLoginNotCompParticipant = () => {
  // const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  const memberId = useLoginUserInfoStore(
    (state) => state.loginUserInfo.loginId
  );
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);

  const setLoginUserInfo = useLoginUserInfoStore(
    (state) => state.setLoginUserInfo
  );
  // 데이터
  const competitionInfo = useCompetitionInfoStore(
    (state) => state.competitionInfo
  );

  const nav = useNavigate();
  const onClick = () => {
    postAccount();
  };

  // # 1. account 생성 axios
  const postAccount = async () => {
    try {
      // console.log(
      //   "대회 계좌 생성 전: ",
      //   memberId,
      //   competitionInfo.competitionId
      // );

      // # 1.1. Axios의 응답 객체에서 accountId 추출
      const response = await defaultInstance.post("/competition", {
        memberId: memberId,
        competitionId: competitionInfo.competitionId,
      });
      console.log("대회 계좌 생성 후: ", response);

      // # 1.2. 계좌 생성 완료 알림
      alert("계좌 생성 완료~!!");

      setLoginUserInfo({
        ...loginUserInfo,
        accountId: response.data,
        balance: 50000000,
        isCompParticipant: true,
      });

      // console.log(loginUserInfo.accountId);
      nav("/trading/005930");
      // 대회로 nav

      // alert(`안녕하세요, ${response.data.nickname}님`);
    } catch (error) {
      console.log(error);

      alert(
        "계좌 생성에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  useEffect(() => {
    // # 2.0.1. femToken Axios
    NotificationFcmTokenAxios(memberId);
  }, []);
  return (
    <div className="py-20 w-1/2 mx-auto">
      <div className="my-5">
        <div className="text-xl font-bold">{competitionInfo.title} 진행 중</div>
        <div>지금 바로 참여하세요.</div>
      </div>
      <Button text={"참여하기"} onClick={onClick} />
    </div>
  );
};

export default HomeCenterIngCompetitionAfterLoginNotCompParticipant;
