import React from "react";

const ProfileUserInfo = () => {
  const userInfo = {
    nickName: "쑤",
    teer: "플래티넘 5",
  };
  return (
    // <div className="flex flex-col justify-around w-52 h-72 border-solid border-2">
    <div className="flex flex-col justify-around w-52 h-72 ">
      <section>
        <img
          className="rounded-full items-center w-40 h-40"
          src="src/assets/userProfileImage_쑤.png"
          alt="userProfileImage"
        />
      </section>
      {/* <section className="flex items-center"> */}
      <section>
        <div className="text-3xl font-semibold text-left mb-2">
          {userInfo["nickName"]}
        </div>
        <div className="flex items-center">
          <>{userInfo["teer"]}</>
          <>
            <img
              className="rounded-full w-5 h-5 ml-2"
              src="src\assets\userTeerBadge.png"
              alt="userTeerBadge"
            />
          </>
        </div>
      </section>
    </div>
  );
};

export default ProfileUserInfo;
