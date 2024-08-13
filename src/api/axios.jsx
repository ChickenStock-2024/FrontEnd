import axios from "axios";

// const BASE_URL = "http://10.13.13.2:8080";
const BASE_URL = import.meta.env.VITE_SERVER_ROOT + "/api";

// 토큰을 헤더에 넣지 않고, api요청 시
const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
    withCredentials: true,
  });
  return instance;
};

// 토큰을 헤더에 넣지 않고, 프로필 사진 관련 api요청 시
const axiosImgApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...options,
    withCredentials: true,
  });
  return instance;
};

// 토큰을 헤더에 넣어서 api요청 시
const axiosAuthApi = (url, options) => {
  const accessToken = "토큰 값";
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: accessToken },
    ...options,
    // withCredentials: true,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const imgInstance = axiosImgApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
