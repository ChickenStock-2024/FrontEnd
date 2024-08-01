import React, { useState } from "react";

import profileImg from "../../assets/dummy-profile-icon.png";

const ProfileUserInfoImage = () => {
  return (
    <>
      {/* <form>
        <label htmlFor="profile-upload" />
        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          onChange={onChangeImg}
        > */}
      <img
        className="rounded-full items-center w-40 h-40"
        src={profileImg}
        alt="userProfileImage"
      />
      {/* </input>
      </form> */}
    </>
  );
};

export default ProfileUserInfoImage;
