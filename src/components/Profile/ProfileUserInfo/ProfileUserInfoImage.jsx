import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { imgInstance } from "../../../api/axios.jsx";

import useProfilePageInfoStore from "../../../store/useProfilePageInfoStore.js";
import useLoginUserInfoStore from "../../../store/useLoginUserInfoStore.js";

import { TbPhotoEdit } from "react-icons/tb";

const ProfileUserInfoImage = () => {
  // # 0.  현재 접속한 유저의 loginId 및 url에서 profilePageId 가져오기
  const { profilePageId } = useParams();
  const loginId = useLoginUserInfoStore((state) => state.loginUserInfo.loginId);

  // const profileImgItem =
  //   "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";
  // const [profileImage, setProfileImage] = useState(profileImg);
  const profilePageInfo = useProfilePageInfoStore(
    (state) => state.profilePageInfo
  );

  const setProfilePageInfo = useProfilePageInfoStore(
    (state) => state.setProfilePageInfo
  );
  const [originImg, setOriginImg] = useState(profilePageInfo.profileImg);
  const profileImgFileInput = useRef(null);

  const profileChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const formData = new FormData();
      const formInputImage = e.target.files[0];
      // formData.append("formInputImage", formInputImage);
      formData.append("file", formInputImage);
      // console.log("보낼 이미지: ", formInputImage);
      // console.log("formData : ", formData);
      // console.log("formData.file: ", formData.file);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setOriginImg(reader.result);
        }
      };
      reader.readAsDataURL(formInputImage);

      try {
        const response = await imgInstance.post("/user/img", formData);
        // console.log("프로필 이미지 변경 후 response:", response);
        // console.log("서버 응답:", response.data);
        setProfilePageInfo({
          ...profilePageInfo,
          profileImg: response.data.imgUrl,
        });
      } catch (error) {
        alert(
          "프로필 이미지 변경에 실패했습니다: " +
            (error.response ? error.response.data.message : error.message)
        );
      }
      // 동일한 파일 다시 선택시에도 axios전송 실행하기 위해, 입력 값 초기화
      profileImgFileInput.current.value = null;
    } else {
      // setProfileImage(profileImg);
      return;
    }
  };

  return (
    <>
      {profilePageId == loginId ? (
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
            // src={`data:image/;base64,${profileImgItem}`}
            src={profilePageInfo.profileImg}
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
      ) : (
        <img
          className="rounded-full items-center w-40 h-40 border-2 border-gray-100"
          // src={`data:image/;base64,${profileImgItem}`}
          src={profilePageInfo.profileImg}
          alt="userProfileImage"
        />
      )}
    </>
  );
};

export default ProfileUserInfoImage;
