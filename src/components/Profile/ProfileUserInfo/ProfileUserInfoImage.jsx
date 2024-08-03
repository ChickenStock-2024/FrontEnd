import React, { useState, useRef } from "react";
import { TbPhotoEdit } from "react-icons/tb";

// import profileImg from "../../assets/dummy-profile-icon.png";

const ProfileUserInfoImage = ({ profileImg }) => {
  const [profileImage, setProfileImage] = useState(profileImg);
  const profileImgFileInput = useRef(null);

  const profileChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage(user.profileImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
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
      <TbPhotoEdit
        className="absolute bottom-11 left-32 w-7 h-7 p-1 rounded-full bg-white border-2 border-gray-200 cursor-pointer"
        onClick={() => {
          profileImgFileInput.current.click();
        }}
      />
      <img
        className="rounded-full items-center w-40 h-40 border-2 border-gray-100 cursor-pointer"
        src={profileImage}
        alt="userProfileImage"
        onClick={() => {
          profileImgFileInput.current.click();
        }}
      />
      <input
        className="opacity-0"
        type="file"
        accept="image/*"
        onChange={profileChange}
        ref={profileImgFileInput}
      />
      {/* </input>
      </form> */}
    </>
  );
};

export default ProfileUserInfoImage;
