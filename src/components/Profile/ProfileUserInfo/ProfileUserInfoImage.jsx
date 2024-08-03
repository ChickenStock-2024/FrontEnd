import React, { useState, useRef } from "react";
import axios from "axios";

import { TbPhotoEdit } from "react-icons/tb";

// import profileImg from "../../assets/dummy-profile-icon.png";

const ProfileUserInfoImage = ({ profileImg }) => {
  const [profileImage, setProfileImage] = useState(profileImg);
  const profileImgFileInput = useRef(null);

  const profileChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const formData = new FormData();
      const formInputImage = e.target.files[0];
      formData.append("formInputImage", formInputImage);
      console.log(formInputImage);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(formInputImage);
      // };

      try {
        await axios({
          method: "POST",
          url: "/이미지 보낼 api",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => res.json())
          .then((profileImageChange) => {
            setProfileImage(formInputImage);
            console.log(profileImageChange);
            alert(profileImageChange.result);
          });
      } catch (error) {
        setProfileImage(profileImg);
        alert(error.message);
      }
      // 동일한 파일 다시 선택시에도 axios전송 실행하기 위해, 입력 값 초기화
      profileImgFileInput.current.value = null;
    } else {
      setProfileImage(profileImg);
      return;
    }
  };

  return (
    <>
      <form>
        <label htmlFor="profile-upload" />
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
          id="profile-upload"
          className="opacity-0"
          type="file"
          accept="image/*"
          onChange={profileChange}
          ref={profileImgFileInput}
        />
      </form>
    </>
  );
};

export default ProfileUserInfoImage;
