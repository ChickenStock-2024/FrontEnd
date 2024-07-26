import React from "react";
// import profileImage from "../../assets/userProfileImage_쑤.png";
// import userTeerBadge from "../../assets/userTeerBadge.png";

const ProfileUserSearchTabResult = () => {
  const userInfos = [
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
    {
      nickName: "쑤",
      rank: "23",
      latestRating: "+2340",
      earningRate: "+30",
      earnings: "+300,000",
    },
  ];
  return (
    <div className="flex">
      <section className="flex-row flex-1">
        {userInfos.map((userInfo, index) => (
          <>
            <div className="flex py-3">
              <div className=" flex w-[50%]">
                <div className="w-[20%] text-l font-bold">
                  {userInfo["rank"]}위
                </div>
                <div className="flex items-center">
                  <div className="flex-none">
                    <img
                      className="rounded-full w-5 h-5"
                      src="src/assets/userProfileImage_쑤.png"
                      // src={profileImage}
                      alt="userProfileImage"
                    />
                  </div>
                  <div className="flex-none">
                    <img
                      className="rounded-full w-5 h-5 ml-1 mr-2"
                      src="src/assets/userTeerBadge.png"
                      // src={userTeerBadge}
                      alt="userTeerBadge"
                    />
                  </div>
                  <div className="text-l font-bold">{userInfo["nickName"]}</div>
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
                    {userInfo["latestRating"]}
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </section>
    </div>
  );
};

export default ProfileUserSearchTabResult;
