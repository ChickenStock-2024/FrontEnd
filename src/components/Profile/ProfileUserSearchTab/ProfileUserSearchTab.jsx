import React from "react";
import ProfileUserSearchTabSearch from "./ProfileUserSearchTabSearch.jsx";
// import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";

// import Input from "../../Input.jsx";

const ProfileUserSearchTab = () => {
  const users = [
    {
      id: 1,
      nickname: "nickname",
      rank: "23",
      rating: 1832,
      point: 100,
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      id: 2,
      nickname: "nicknamea",
      rank: "2",
      rating: 2947,
      point: 100,
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      id: 3,
      nickname: "nicknameb",
      rank: "3",
      rating: 2587,
      point: 100,
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      id: 4,
      nickname: "soo12",
      rank: "23",
      rating: 1832,
      point: 100,
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      id: 5,
      nickname: "SOO",
      rank: "2",
      rating: 2947,
      point: 100,
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      id: 6,
      nickname: "soob",
      rank: "3",
      rating: 2587,
      point: 100,
      earningRate: "+70",
      earnings: "+700,000",
    },
  ];
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
};

export default ProfileUserSearchTab;
