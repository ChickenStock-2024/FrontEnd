import React, { useEffect } from "react";
import ProfileUserInfoImage from "./ProfileUserInfoImage";
// import profileImg from "../../../assets/dummy-profile-icon.png";
import tierBadgeIcon from "../../../assets/userTierBadge.png";

const ProfileUserInfo = ({ userInfo }) => {
  // useEffect(() => {});
  // const userInfo = {
  //   member_id: 1,
  //   nickname: "쑤",
  //   tier: "플래티넘 5",
  //   profileImg: profileImg,
  // };

  // console.log(userInfo);
  if (!userInfo) {
    return <div>Loading...</div>; // userInfo가 없을 때 대처
  } else
    return (
      // <div className="flex flex-col justify-around w-52 h-72 border-solid border-2">
      <div className="w-full flex">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col justify-around w-52 h-72">
            <section>
              <ProfileUserInfoImage profileImg={userInfo.profileImg} />
              {/* <img
              className="rounded-full items-center w-40 h-40"
              src={profileImg}
              alt="userProfileImage"
            /> */}
            </section>
            <section>
              <div className="text-3xl font-semibold text-left mb-2">
                {userInfo.nickname}
              </div>
              <div className="flex items-center">
                {/* <>{userInfo["tier"].split(" ")[0]}</> */}
                <>{userInfo.tier}</>
                <>
                  <img
                    className="rounded-full w-5 h-5 ml-2"
                    src={tierBadgeIcon}
                    alt="userTierBadge"
                  />
                </>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default ProfileUserInfo;
