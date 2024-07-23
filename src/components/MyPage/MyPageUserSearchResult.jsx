import React from "react";

const MyPageUserSearchResult = () => {
  const userInfo = {
    nickName: "쑤",
    rank: "23",
    latestRating: "+2340",
    earningRate: "+30",
    earnings: "+300,000",
  };
  return (
    <>
      <h1>MyPage의 유저 검색 입니당~!!</h1>
      <section className="flex justify-between px-40">
        <div className="flex-none text-l font-bold">{userInfo["rank"]}위</div>
        <div className="flex pr-80 items-center">
          <div className="flex-none">
            <img
              className="rounded-full w-5 h-5"
              src="src/assets/userProfileImage_쑤.png"
              alt="userProfileImage"
            />
          </div>
          <div className="flex-none">
            <img
              className="rounded-full w-5 h-5 ml-1 mr-2"
              src="src\assets\userTeerBadge.png"
              alt="userTeerBadge"
            />
          </div>
          <div className="flex-none text-l font-bold">
            {userInfo["nickName"]}
          </div>
        </div>
        <div className="flex-none text-l font-medium text-right">
          {userInfo["earningRate"]}%({userInfo["earnings"]})
        </div>
        <div className="flex-none text-l font-medium text-right">
          {userInfo["latestRating"]}
        </div>
        <hr />
      </section>
    </>
  );
};

export default MyPageUserSearchResult;
