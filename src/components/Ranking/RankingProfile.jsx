import React from "react";
import { useEffect, useState } from "react";
import RankingProfileRank from "./RankingProfileRank";
import { defaultInstance } from "../../api/axios";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import { calculateTier } from "../../utils/tierCalculator";
import TierBadge from "../TierBadge";

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

  const rating = 1400;
  const tier = calculateTier(rating);

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
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center">
            <div className="w-8 h-8 mx-2">
              {/* 티어 계산해서 올바른 이미지 출력 */}
              <TierBadge tier={tier} />
            </div>
            {/* api로 받은 제대로 된 데이터 출력 */}
            <div className="text-xl font-bold">
              {tier} | {rating}
            </div>
          </div>
          <h2 className="text-4xl font-bold">{userInfo.nickname}</h2>
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
