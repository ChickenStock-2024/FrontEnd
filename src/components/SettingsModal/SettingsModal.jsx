import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";
import useLoginUserStore from "../../store/useLoginUserStore";

import React from "react";
import Button from "../Button";
import Toggle from "../Toggle";

const SettingsModal = ({ closeModal }) => {
  const nav = useNavigate();
  const clearLoginUserInfo = useLoginUserStore(
    (state) => state.clearLoginUserInfo
  );

  // 1. 로그아웃 클릭시
  const handleLogout = () => {
    postLogout();
  };

  // 2. 로그아웃 axios
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
            <input
              type="text"
              id="nickname-setting"
              className="border border-gray-500 rounded-md p-3"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button text={"저장"} onClick={closeModal} />
        </div>
        <div className="mt-3 text-center">
          <Button text={"로그아웃"} onClick={handleLogout} color={"yellow3"} />
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
