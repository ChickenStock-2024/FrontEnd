import React from "react";
import profileImage from "../../../assets/userProfileImage_쑤.png";
import userTierBadge from "../../../assets/userTierBadge.png";

const ProfileUserSearchTabResult = () => {
  const userInfos = [
    {
      nickname: "0.쑤",
      rank: "23",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "1.쑤",
      rank: "23",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "2.쑤",
      rank: "25",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "3.쑤",
      rank: "263",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "4.쑤",
      rank: "15",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "5.쑤",
      rank: "16",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "6.쑤",
      rank: "18",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickname: "7.쑤",
      rank: "20",
      rating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
  ];
  return (
    <div className="flex">
      <section className="flex-row flex-1">
        {userInfos.map((userInfo, index) => (
          <div key={index}>
            <div className="flex py-3">
              <div className=" flex w-[50%]">
                <div className="w-[20%] text-l font-bold">
                  {userInfo["rank"]}위
                </div>
                <div className="flex items-center">
                  <div className="flex-none">
                    <img
                      className="rounded-full w-5 h-5"
                      // src="src/assets/userProfileImage_쑤.png"
                      src={profileImage}
                      alt="userProfileImage"
                    />
                  </div>
                  <div className="flex-none">
                    <img
                      className="rounded-full w-5 h-5 ml-1 mr-2"
                      // src="src/assets/userTierBadge.png"
                      src={userTierBadge}
                      alt="userTierBadge"
                    />
                  </div>
                  <div className="text-l font-bold">{userInfo["nickname"]}</div>
                </div>
              </div>
              <div className="w-[50%] flex justify-end">
                <div className="w-[60%] flex justify-end ">
                  <div className="text-l font-medium">
                    {userInfo["earningRate"]}%
                  </div>
                  <div className="text-l font-medium">
                    ({userInfo["earnings"]})
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="text-l font-medium text-right">
                    {userInfo["rating"]}
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProfileUserSearchTabResult;
