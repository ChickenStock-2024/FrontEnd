import React from "react";

const MyPageProfile = () => {
  const userInfo = {
    nickName: "쑤",
    teer: "플래티넘 5",
  };
  return (
    <div className="flex flex-col w-52 h-72 border-solid border-2">
      <p>MyPageProfile입니당~!!</p>
      <section className="justify-center">
        <img
          className="rounded-full w-40 h-40"
          src="src/assets/userProfileImage_쑤.png"
          alt="userProfileImage"
        />
      </section>
      <section className="text-3xl font-semibold">
        {userInfo["nickName"]} 님
      </section>
      <section>
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

export default MyPageProfile;
