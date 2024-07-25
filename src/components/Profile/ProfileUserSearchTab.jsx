import React from "react";
import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";

import Input from "../Input.jsx";

const ProfileUserSearchTab = () => {
  return (
    <>
      {/* 하기에 유저 검색창 기능 및 인풋 코드 추가하기!  */}
      <Input placeholder={"유저 닉네임을 입력하세여~!!"} />

      <ProfileUserSearchTabResult />
    </>
  );
};

export default ProfileUserSearchTab;
