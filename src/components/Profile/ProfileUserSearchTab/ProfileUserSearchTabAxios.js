import React from "react";
import axios from "axios";

const ProfileUserSearchTabAxios = ({ search }) => {
  const users_list = [
    {
      id: 1,
      nickname: "nickname",
      rank: "23",
      rating: 1832,
      point: 100,
      earningRate: "+30",
      earnings: "300000",
    },
    {
      id: 2,
      nickname: "nicknamea",
      rank: "2",
      rating: 2947,
      point: 100,
      earningRate: "+30",
      earnings: "300000",
    },
    {
      id: 3,
      nickname: "nicknameb",
      rank: "3",
      rating: 2587,
      point: 100,
      earningRate: "+30",
      earnings: "300,000",
    },
    {
      id: 4,
      nickname: "soo12",
      rank: "23",
      rating: 1832,
      point: 100,
      earningRate: "+30",
      earnings: "300,000",
    },
    {
      id: 5,
      nickname: "SOO",
      rank: "2",
      rating: 2947,
      point: 100,
      earningRate: "+30",
      earnings: "300,000",
    },
    {
      id: 6,
      nickname: "soob",
      rank: "3",
      rating: 2587,
      point: 100,
      earningRate: "+70",
      earnings: "700,000",
    },
  ];
  // axios({
  //   method: "GET",
  //   // url: "/users/search/",
  //   url: `/users/search?value=${search}`,
  //   heders: {
  //     "Content-Type": "application/json",
  //     // "Access-Token": sessionStorage.getItem("accessToken"),
  //     access_token: sessionStorage.getItem("accessToken"),
  //   },
  //   responseType: "json",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     const users_list = data.member_list;
  //     return users_list;
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });

  return users_list;
};
export default ProfileUserSearchTabAxios;
