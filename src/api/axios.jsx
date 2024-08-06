import axios from "axios";

const BASE_URL = "http://10.13.13.2:8080";

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
    withCredentials: true,
  });
  return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url, options) => {
  const accessToken = "토큰 값";
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: accessToken },
    ...options,
    withCredentials: true,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
