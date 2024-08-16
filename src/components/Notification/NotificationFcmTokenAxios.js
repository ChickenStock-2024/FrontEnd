import axios from "axios";
import { defaultInstance } from "../../api/axios";

// const notificationSetting = true;
const NotificationFcmTokenAxios = async (memberId) => {
  try {
    const fcmToken = window.sessionStorage.getItem("fcmToken");
    console.log("세션스토리지 fcmToken", fcmToken);
    const response = await defaultInstance.post("/fcm", {
      memberId: memberId,
      fcmToken: fcmToken,
      // fcmToken: window.sessionStorage.getItem("fcmToken"),
    });
    console.log("로그인 후 알림 설정값에 따른 fcmToken", fcmToken);

    console.log("fcmToken response: ", response);
    // alert("매매 내역 히스토리 가져오기 완료~!!");
  } catch (error) {
    console.log(error);
    alert(
      "fcmToken 전달 실패: " +
        (error.response ? error.response.data.message : error.message)
    );
  }
};
// const currenrFcmToken =
//   webNoti === true ? sessionStorage.getItem("fcmToken") : "";

// const fcmToken = window.sessionStorage.getItem("fcmToken");
// console.log("로그인 후 알림 설정값에 따른 fcmToken", fcmToken);
// console.log("로그인 후 알림 설정값에 따른 fcmToken", currenrFcmToken);
// await axios({
//   method: "post",
//   url: "/api/fcm",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   responseType: "json",
//   data: {
//     fcmToken: fcmToken,
//   },
// })
//   .then((response) => {
//     console.log("fcmToken", response);
//   })
//   .catch((error) => {
//     console.log(error);
//     alert(
//       "fcmToken 전달 실패: " +
//         (error.response ? error.response.data.message : error.message)
//     );
//   });
// };
export default NotificationFcmTokenAxios;
