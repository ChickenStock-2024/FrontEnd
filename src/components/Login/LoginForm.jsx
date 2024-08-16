import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { defaultInstance } from "../../api/axios";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import useCompetitionInfoStore from "../../store/useCompetitionInfoStore";
import useNotificationInfoStore from "../../store/useNotificationInfoStore";

import LogoNameImage from "../../assets/logoName.svg";
import KaKaoLoginImage from "../../assets/kakaoLogin.svg";

// import NotificationFcmTokenAxios from "../Notification/NotificationFcmTokenAxios";

const LoginForm = () => {
  const nav = useNavigate();
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  const setLoginUserInfo = useLoginUserInfoStore(
    (state) => state.setLoginUserInfo
  );
  const competitionInfo = useCompetitionInfoStore(
    (state) => state.competitionInfo
  );
  const setCompetitionInfo = useCompetitionInfoStore(
    (state) => state.setCompetitionInfo
  );
  const notificationInfo = useNotificationInfoStore(
    (state) => state.notificationInfo
  );
  const setNotificationInfo = useNotificationInfoStore(
    (state) => state.setNotificationInfo
  );

  // 로그인 정보(유저가 로그인 창에서 입력한 email, password, fcm토큰)
  // # 1.1. inputData 상태관리
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  // # 1.2. inputData 바뀔 때마다 저장하기
  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  };

  // # 1.3. inputData 구조분해 할당
  const { email, password } = inputData;

  // 2. 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin();
  };

  // # 3. 로그인 axios
  const postLogin = async () => {
    try {
      // console.log("로그인 전: ", inputData);

      // # 2.0. Axios의 응답 객체에서 직접 checkedEmail 추출
      const response = await defaultInstance.post("/auth/login", {
        email: email,
        password: password,
      });
      console.log("로그인 response: ", response);
      // # 2.1. 로그인 완료 알림
      alert("로그인 완료~!!");
      // console.log("로그인 후 로그인 유저 인포: ", response);

      // # 2.2. 로그인 상태 업데이트
      setLoginUserInfo({
        ...loginUserInfo,
        accountId: response.data.accountId,
        balance: response.data.balance,
        isCompParticipant: response.data.isCompParticipant,
        rating: response.data.rating,
        loginId: response.data.memberId,
        nickname: response.data.nickname,
        isLogined: true,
      });

      setNotificationInfo({
        ...notificationInfo,
        webNotification: response.data.webNoti,
        kakaoNotification: response.data.kakaotalkNoti,
      });

      try {
        const response = await defaultInstance.get("/competition");
        // # 3.1. ingCompetition 완료 알림
        // alert("현재 대회 개최 유무 get 완료~!!");
        // console.log("현재 대회 개최 유무 response: ", response);

        // # 3.2. ingCompetition 상태 업데이트
        await setCompetitionInfo({
          ...competitionInfo,
          ingCompetition: response.data.ingCompetition,
          competitionId: response.data.competitionId,
          title: response.data.title,
          startAt: response.data.startAt,
          endAt: response.data.endAt,
        });

        // console.log("진행 대회 정보 조회 완료: ", competitionInfo);

        // # 3.3. ingCompetition get 완료 후, 메인 페이지로 이동!

        nav("/");
      } catch (error) {
        console.log(error);
        alert(
          "진행 대회 정보 조회에 실패했습니다: " +
            (error.response ? error.response.data.message : error.message)
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        "로그인에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  // 4. 카카오 로그인
  const clickKakao = () => {
    // console.log("카카오 로그인 전");
    window.location.href = `${import.meta.env.VITE_SERVER_ROOT}/api/auth/login/kakao`;
  };

  return (
    // <div className="flex flex-col w-full items-center justify-center pt-14 pb-20 gap-3 border-2 border-slate-200 rounded-xl">
    <div className="flex flex-col w-full items-center justify-center pt-14 pb-20 gap-3">
      {/* 로고 */}
      <div className="flex w-72 items-center mb-4 md:mb-0">
        <img alt="logo" src={LogoNameImage} />
      </div>

      {/* form */}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="email"
          >
            이메일
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="email"
            placeholder="이메일"
            id="email"
            value={email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="flex flex-col pb-3">
          <label
            className="text-left font-semibold text-sm text-gray-900"
            htmlFor="password"
          >
            비밀번호
          </label>
          <input
            className="w-72 h-12 border-2 border-gray-200 rounded-md mt-1"
            type="password"
            placeholder="비밀번호"
            id="password"
            value={password}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <button className="w-72 h-11 bg-yellow3 rounded-md">로그인</button>
        </div>
      </form>

      {/* 비밀번호찾기 회원가입 */}
      <div className="w-72 flex flex-row justify-evenly items-center text-center text-base text-gray-500">
        <div className="flex-1 text-center">비밀번호 찾기</div>
        <span> | </span>
        <div role="button" className="flex-1 text-center">
          <Link to={"/signup"}>
            <div>회원가입</div>
          </Link>
        </div>
      </div>

      {/* 간편로그인 line */}
      <div className="w-72 flex items-center text-center font-semibold text-sm text-gray-400">
        <hr className="w-full" />
        <div className="min-w-max">
          <span className="mx-2">간편로그인</span>
        </div>
        <hr className="w-full" />
      </div>

      {/* 카카오로그인 */}
      <div className="w-72 flex justify-center h-11 items-center">
        <button
          // onClick={() => {
          //   window.location.href = `${import.meta.env.VITE_SERVER_ROOT}/api/auth/login/kakao`;
          // }}
          onClick={clickKakao}
          // onClick={() => {
          //   window.open(
          //     "http://localhost:5173/kakaoLogin",
          //     // `${import.meta.env.VITE_SERVER_ROOT}/kakaoLogin`,
          //     "newWindow"
          //   );
          // }}
        >
          <img src={KaKaoLoginImage} />
        </button>
      </div>
    </div>
  );
};
export default LoginForm;
