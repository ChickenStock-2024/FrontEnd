import React from "react";
import RankingProfileRank from "./RankingProfileRank";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";
import { calculateTier } from "../../utils/tierCalculator";
import TierBadge from "../TierBadge";

const RankingProfile = ({ parameter, myRanking, rank }) => {
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);

  // const [userInfo, setUserInfo] = useState({});
  // useEffect(() => {
  //   getUserInfo(loginId);
  // }, [loginId]);

  // const getUserInfo = async (loginId) => {
  //   try {
  //     const response = await defaultInstance.get(`/user/${loginId}`);
  //     setUserInfo(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const rating = 1200;
  // const tier = calculateTier(rating);

  const cumProfitRate =
    (myRanking.profit / (myRanking.competitionCount * 50000000)) * 100 || 0;
  const tier = calculateTier(myRanking.rating);

  return (
    <div className="flex justify-between gap-8 px-36 py-6 bg-yellow3 rounded-2xl min-w-max">
      <div className="flex-1 flex justify-center items-center gap-8 min-w-max">
        <div>
          {/* 프사 부분 */}
          <img
            className="rounded-full w-32 h-32"
            src={`https://chickenstock.givendragon.site/resource/${myRanking.imgUrl}`}
            alt="userProfileImage"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center">
            <div className="w-8 h-8 mr-2">
              {/* 티어 계산해서 올바른 이미지 출력 */}
              <TierBadge tier={tier} />
            </div>
            {/* api로 받은 제대로 된 데이터 출력 */}
            <div className="text-xl font-bold">
              {tier} | {myRanking.rating}
            </div>
          </div>
          <h2 className="text-4xl font-bold">{myRanking.nickname}</h2>
          <span>대회 {myRanking.competitionCount}회 참여</span>
          <span>
            {myRanking.profit && myRanking.profit.toLocaleString()}원 (
            {cumProfitRate}%)
          </span>
        </div>
      </div>
      {/* 내 순위를 계산해서 보내주기 */}
      <RankingProfileRank rank={rank} parameter={parameter} />
    </div>
  );
};

export default RankingProfile;
