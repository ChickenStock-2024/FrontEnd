import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";

import React from "react";
import Toggle from "../Toggle";

const SettingsModal = ({ closeModal }) => {
  const nav = useNavigate();
  // const nickname = useLoginUserInfoStore(
  //   (state) => state.loginUserInfo.nickname
  // );
  // const clearLoginUserInfo = useLoginUserInfoStore(
  //   (state) => state.clearLoginUserInfo
  // );
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

  return (
    <div className="p-10">
      <div>
        <h2 className="text-2xl text-center font-bold mb-12">알림 설정</h2>
        <div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>웹 알림</span>
            <Toggle />
          </div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>카카오톡 알림</span>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
