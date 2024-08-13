import axios from "axios";

// const notificationSetting = true;
const NotificationFcmTokenAxios = () => {
  const currenrFcmToken =
    notificationSetting === true ? sessionStorage.getItem("fcmToken") : "";

  console.log("로그인 후 알림 설정값에 따른 fcmToken", currenrFcmToken);
  axios({
    method: "POST",
    url: "fcmToken 보낼 백엔드 url",
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
    data: {
      fcmToken: currenrFcmToken,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => alert(error.message));
};
export default NotificationFcmTokenAxios;
