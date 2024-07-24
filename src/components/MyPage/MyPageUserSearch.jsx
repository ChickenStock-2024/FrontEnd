import React from "react";
import MyPageUserSearchResult from "./MyPageUserSearchResult.jsx";

import Input from "../Input.jsx";

const MyPageUserSearch = () => {
  return (
    <>
      {/* 하기에 유저 검색창 기능 및 인풋 코드 추가하기!  */}
      <Input placeholder={"유저 닉네임을 입력하세여~!!"} />

      <MyPageUserSearchResult />
    </>
  );
};

export default MyPageUserSearch;
