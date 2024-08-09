import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";

import React from "react";
import Button from "../Button";
import Toggle from "../Toggle";

const SettingsModal = ({ closeModal }) => {
  const nav = useNavigate();
  const nickname = useLoginUserInfoStore(
    (state) => state.loginUserInfo.nickname
  );
  const clearLoginUserInfo = useLoginUserInfoStore(
    (state) => state.clearLoginUserInfo
  );
  // # 3.1. newNickname 상태관리
  const [changeData, setChangeData] = useState({
    newNickname: "",
  });
  // // # 3.2. inputData 바뀔 때마다 저장하기
  // const handleInput = (e) => {
  //   setInputData({
  //     ...inputData,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // # 3. 닉네임 중복 검사 axios
  const getNicknameChecked = async () => {
    try {
      console.log("닉네임 중복 검사 전: ", newNickname);

      // Axios의 응답 객체에서 직접 checkedNickname 추출
      const response = await defaultInstance.get(
        `/auth/nickname/${newNickname}`
      );
      const checkedNickname = response.data.nickname;

      alert("닉네임 중복 확인 완료~!!");
      console.log("중복 확인 완료 닉네임: ", checkedNickname);

      // 진행 상태 업데이트
      setCheckedData({
        ...checkedData,
        isNicknameChecked: true,
        checkedNickname: checkedNickname,
      });
    } catch (error) {
      console.log(error);
      alert(
        "닉네임 중복 확인 중 오류: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  // 5.1. 로그아웃 클릭시
  const handleLogout = () => {
    postLogout();
  };

  // 4.2. 로그아웃 axios
  const postLogout = async () => {
    try {
      const response = await defaultInstance.post("/auth/logout");

      // # 2.1. 로그아웃 axios 보내면서, 로그인한 유저 정보 삭제
      clearLoginUserInfo();
      localStorage.clear();
      sessionStorage.clear();

      // # 2.2. 로그아웃 완료 알림
      alert("로그아웃 완료~!!");
      console.log(response);
      nav("/");
    } catch (error) {
      console.log(error);
      clearLoginUserInfo();
      localStorage.clear();
      sessionStorage.clear();
      alert(
        "로그아웃에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
      nav("/");
    }
  };

  return (
    <div className="p-10">
      <div>
        <h2 className="text-2xl text-center font-bold mb-12">설정</h2>
        <div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>알림</span>
            <Toggle />
          </div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>카카오톡 알림</span>
            <Toggle />
          </div>
          <div className="flex flex-col py-4">
            <label htmlFor="nickname-setting" className="mb-2">
              닉네임 변경
            </label>
            <div className="flex">
              <input
                type="text"
                id="nickname-setting"
                className="flex-1 border border-gray-500 rounded-md p-3"
                placeholder={nickname}
                value={changeData.newNickname}
              />
              <button
                className="flex-none h-10 mt-1 ml-2 px-1 bg-yellow3 rounded-md text-sm"
                type="button"
                onClick={getNicknameChecked}
              >
                중복확인
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 pb-3 text-center border-b">
          <Button text={"저장"} onClick={closeModal} />
        </div>
        <div className="mt-3 text-center">
          <Button
            text={"로그아웃"}
            onClick={(closeModal, handleLogout)}
            color={"yellow3"}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
