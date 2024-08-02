import React from "react";
import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";

import Input from "../../Input.jsx";

const ProfileUserSearchTab = () => {
  return (
    <>
      <div className="flex flex-col mx-52">
        {/* 하기에 유저 검색창 기능 및 인풋 코드 추가하기!  */}
        <div className="pb-5">
          <Input placeholder={"유저 닉네임을 입력하세여~!!"} />
        </div>
        <div className="px-7">
          <ProfileUserSearchTabResult />
        </div>
      </div>
    </>
  );
};

export default ProfileUserSearchTab;
