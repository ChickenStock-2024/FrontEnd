import React from "react";
import { useEffect, useState } from "react";
import RankingProfileRank from "./RankingProfileRank";
import { defaultInstance } from "../../api/axios";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";

const RankingProfile = ({ parameter }) => {
  // const userInfo = {
  //   nickname: "치킨엔젤",
  //   tier: "플래티넘 5",
  //   rank: 23,
  //   latestRating: +2340,
  //   earningRate: "30",
  //   earnings: "300,000",
  //   competitionCount: 3,
  // };

  const loginId = useLoginUserInfoStore((state) => state.loginUserInfo.loginId);

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo(loginId);
  }, [loginId]);

  const getUserInfo = async (loginId) => {
    try {
      const response = await defaultInstance.get(`/user/${loginId}`);
      setUserInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between gap-8 px-36 py-6 bg-yellow3 rounded-2xl min-w-max">
      <div className="flex-1 flex justify-center items-center gap-8 min-w-max">
        <div>
          {/* 프사 부분 */}
          <img
            className="rounded-full w-28 h-28"
            src={userInfo.imgUrl}
            alt="userProfileImage"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap items-center">
            <img
              className="rounded-full w-5 h-5 mr-2"
              src="src\assets\userTierBadge.png"
              alt="userTierBadge"
            />
            {/* 티어 계산해서 올바른 이미지 출력 */}
            <div className="font-bold">
              {userInfo.tier} | {userInfo.latestRating}
            </div>
          </div>
          <h2 className="text-3xl font-bold">{userInfo.nickname}</h2>
          {/* <span>대회 {userInfo.competitionCount}회 참여</span> */}
          {/* <span>
            {userInfo.earningRate}%(+{userInfo.earnings})
          </span> */}
        </div>
      </div>
      <RankingProfileRank rank={userInfo.rank} parameter={parameter} />
    </div>
  );
};

export default RankingProfile;
