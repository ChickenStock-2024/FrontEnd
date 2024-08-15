import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";
import useNotificationInfoStore from "../../store/useNotificationInfoStore";

import React from "react";
import Toggle from "../Toggle";

const SettingsModal = ({ closeModal }) => {
  const nav = useNavigate();
  const notificationInfo = useNotificationInfoStore(
    (state) => state.notificationInfo
  );
  const setNotificationInfo = useNotificationInfoStore(
    (state) => state.setNotificationInfo
  );

  const [WebNotificationOn, SetWebNotificationOn] = useState(
    notificationInfo.webNotification
  );
  const [KakaoNotificationOn, SetKakaoNotificationOn] = useState(
    notificationInfo.kakaoNotification
  );

  // console.log("WebNotificationOn: ", WebNotificationOn);
  // console.log("KakaoNotificationOn: ", KakaoNotificationOn);

  // # 1.1. Web알림 설정 axios
  const postWebNotification = async () => {
    try {
      // console.log("WebNotificationOn: ", WebNotificationOn);
      const response = await defaultInstance.post("/user/noti/web");
      alert("Web 알림 설정 변경 완료~!!");
      // console.log("Web 알림 설정 response: ", response.data);
      setNotificationInfo({
        ...notificationInfo,
        webNotification: response.data.webNoti,
      });
      // console.log(
      //   "webNotification 변경 후: ",
      //   notificationInfo.webNotification
      // );
      closeModal();
    } catch (error) {
      console.log(error);
      alert(
        "웹 알림 설정 변경에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  // # 1.2. Kakao알림 설정 axios
  const postKakaoNotification = async () => {
    try {
      console.log("KakaoNotificationOn: ", KakaoNotificationOn);
      const response = await defaultInstance.post("/user/noti/kakaotalk");
      alert("Kakao 알림 설정 변경 완료~!!");
      // console.log("Kakao 알림 설정 response: ", response.data);
      setNotificationInfo({
        ...notificationInfo,
        kakaoNotification: response.data.kakaotalkNoti,
      });
      closeModal();
    } catch (error) {
      console.log(error);
      alert(
        "카카오 알림 설정 변경에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <div className="p-10">
      <div>
        <h2 className="text-2xl text-center font-bold mb-12">알림 설정</h2>
        <div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>웹 알림</span>
            <Toggle
              toggleDefault={notificationInfo.webNotification}
              toggleSwitch={() => {
                SetWebNotificationOn(WebNotificationOn);
                postWebNotification();
              }}
            />
          </div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>카카오톡 알림</span>
            <Toggle
              toggleDefault={notificationInfo.kakaoNotification}
              toggleSwitch={() => {
                SetKakaoNotificationOn(KakaoNotificationOn);
                postKakaoNotification();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
