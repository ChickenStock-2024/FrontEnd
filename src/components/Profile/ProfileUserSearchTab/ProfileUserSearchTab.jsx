import React from "react";
import { useState, useEffect } from "react";
import ProfileUserSearchTabSearch from "./ProfileUserSearchTabSearch.jsx";
// import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";
import ProfileUserSearchTabAxios from "./ProfileUserSearchTabAxios.js";
// import Input from "../../Input.jsx";

const ProfileUserSearchTab = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    setUsers(() => ProfileUserSearchTabAxios());
  }, []);
  if (!users) {
    return <div>Loading...</div>; // users가 없을 때, 로딩중 렌더링
  } else {
    return (
      <>
        <div className="flex flex-col mx-52">
          {/* 하기에 유저 검색창 기능 및 인풋 코드 추가하기!  */}
          <div className="pb-5">
            <ProfileUserSearchTabSearch
              users={users}
              // placeholder={"유저 닉네임을 입력하세여~!!"}
            />
          </div>

          {/* <div className="pb-5">
          <Input placeholder={"유저 닉네임을 입력하세여~!!"} />
        </div>
        <div className="px-7">
          <ProfileUserSearchTabResult />
        </div> */}
        </div>
      </>
    );
  }
};

export default ProfileUserSearchTab;
