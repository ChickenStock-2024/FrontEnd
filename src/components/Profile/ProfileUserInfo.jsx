import React from "react";
import ProfileUserInfoImage from "./ProfileUserInfoImage";
import profileImg from "../../assets/dummy-profile-icon.png";
import teerBadgeIcon from "../../assets/userTeerBadge.png";

const ProfileUserInfo = () => {
  const userInfo = {
    userPk: 1,
    nickName: "쑤",
    teer: "플래티넘 5",
  };
  return (
    // <div className="flex flex-col justify-around w-52 h-72 border-solid border-2">
    <div className="w-full flex">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col justify-around w-52 h-72">
          <section>
            <ProfileUserInfoImage />
            {/* <img
              className="rounded-full items-center w-40 h-40"
              src={profileImg}
              alt="userProfileImage"
            /> */}
          </section>
          <section>
            <div className="text-3xl font-semibold text-left mb-2">
              {userInfo["nickName"]}
            </div>
            <div className="flex items-center">
              <>{userInfo["teer"]}</>
              <>
                <img
                  className="rounded-full w-5 h-5 ml-2"
                  src={teerBadgeIcon}
                  alt="userTeerBadge"
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
