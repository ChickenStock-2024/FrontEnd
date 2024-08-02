import axios from "axios";
import profileImg from "../../../assets/dummy-profile-icon.png";

const ProfileUserInfoAxios = ({ userId }) => {
  const userInfo = {
    nickname: "0.쑤",
    rank: "23",
    rating: "+2340",
    tier: "플래티넘 5",
    profileImg: profileImg,
  };
  // await axios({
  //   method: "GET",
  //   url: `/users/${userId}`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     // "Access-Token": sessionStorage.getItem("accessToken"),
  //     access_token: sessionStorage.getItem("accessToken"),
  //   },
  //   responseType: "json",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     const userInfo = {
  //       nickname: data["nickname"],
  //       rank: data["nickname"],
  //       rating: data["rating"],
  //       tier: data["tier"],
  //       profileImg: data["profileImg"],
  //       // point: data["point"],
  //     };
  //     console.log(userInfo);
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });
  return userInfo;
};

export default ProfileUserInfoAxios;
