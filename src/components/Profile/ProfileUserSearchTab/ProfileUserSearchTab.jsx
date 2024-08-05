import React from "react";
import { useState, useEffect } from "react";
import ProfileUserSearchTabSearch from "./ProfileUserSearchTabSearch.jsx";
// import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";
import ProfileUserSearchTabAxios from "./ProfileUserSearchTabAxios.js";
// import Input from "../../Input.jsx";

const ProfileUserSearchTab = ({ priceFormat }) => {
  // const users = [
  //   {
  //     id: 1,
  //     nickname: "nickname",
  //     rank: "23",
  //     rating: 1832,
  //     point: 100,
  //     earningRate: "+30",
  //     earnings: "300000",
  //   },
  //   {
  //     id: 2,
  //     nickname: "nicknamea",
  //     rank: "2",
  //     rating: 2947,
  //     point: 100,
  //     earningRate: "+30",
  //     earnings: "300000",
  //   },
  //   {
  //     id: 3,
  //     nickname: "nicknameb",
  //     rank: "3",
  //     rating: 2587,
  //     point: 100,
  //     earningRate: "+30",
  //     earnings: "300,000",
  //   },
  //   {
  //     id: 4,
  //     nickname: "soo12",
  //     rank: "23",
  //     rating: 1832,
  //     point: 100,
  //     earningRate: "+30",
  //     earnings: "300,000",
  //   },
  //   {
  //     id: 5,
  //     nickname: "SOO",
  //     rank: "2",
  //     rating: 2947,
  //     point: 100,
  //     earningRate: "+30",
  //     earnings: "300,000",
  //   },
  //   {
  //     id: 6,
  //     nickname: "soob",
  //     rank: "3",
  //     rating: 2587,
  //     point: 100,
  //     earningRate: "+70",
  //     earnings: "700,000",
  //   },
  // ];

  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      return setUsers(null);
    } else {
      setUsers(() => ProfileUserSearchTabAxios(search));
    }
  }, [search]);

  return (
    <>
      <div className="flex flex-col mx-52">
        {/* 하기에 유저 검색창 기능 및 인풋 코드 추가하기!  */}
        <div className="pb-5">
          <ProfileUserSearchTabSearch
            users={users}
            search={search}
            setSearch={setSearch}
            priceFormat={priceFormat}
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
};

export default ProfileUserSearchTab;
