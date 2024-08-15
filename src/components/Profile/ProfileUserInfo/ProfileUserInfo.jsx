import React, { useEffect } from "react";
import { TbPhotoEdit } from "react-icons/tb";

import useProfilePageInfoStore from "../../../store/useProfilePageInfoStore";

import ProfileUserInfoImage from "./ProfileUserInfoImage";
// import profileImg from "../../../assets/dummy-profile-icon.png";
import TierBadge from "../../TierBadge";

const ProfileUserInfo = () => {
  const profilePageInfo = useProfilePageInfoStore(
    (state) => state.profilePageInfo
  );
  // console.log(profilePageInfo);

  if (!profilePageInfo) {
    return <div>Loading...</div>; // profilePageInfo가 없을 때 대처
  } else
    return (
      // <div className="flex flex-col justify-around w-52 h-72 border-solid border-2">
      <div className="w-full flex">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col justify-around w-52 h-72">
            <section className="relative">
              <ProfileUserInfoImage />
              {/* <ProfileUserInfoImage profileImg={userInfo.profileImg} /> */}
              {/* <TbPhotoEdit className="absolute bottom-11 left-32 w-7 h-7 p-1 rounded-full border-2 border-gray-300 bg-white" /> */}

              {/* <img
              className="rounded-full items-center w-40 h-40"
              src={profileImg}
              alt="userProfileImage"
            /> */}
            </section>
            <section>
              <div className="text-3xl font-semibold text-left mb-2">
                {profilePageInfo.nickname}
              </div>
              <div className="flex items-center">
                {/* <>{userInfo["tier"].split(" ")[0]}</> */}
                <div className="pr-2">{profilePageInfo.tier}</div>
                <>
                  <div className="w-5 h-5">
                    <TierBadge tier={profilePageInfo.tier} />
                  </div>
                  {/* <img
                    className="rounded-full w-5 h-5 ml-2"
                    src={tierBadgeIcon}
                    alt="userTierBadge"
                  /> */}
                </>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default ProfileUserInfo;
