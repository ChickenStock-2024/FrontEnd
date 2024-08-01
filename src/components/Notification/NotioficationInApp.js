// import NotificationFcmTokenAxios from "./NotificationFcmTokenAxios";
import logo from "../../assets/logo.png";

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const NotificationInApp = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-75FRsaAEs1znFjbXmsmVDAzJpw8WToo",
    authDomain: "chickenstock-noti.firebaseapp.com",
    projectId: "chickenstock-noti",
    storageBucket: "chickenstock-noti.appspot.com",

    messagingSenderId: "218149229472",
    appId: "1:218149229472:web:c08a13d6182b024689cac5",
    measurementId: "G-B3P9Y23XX0",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  //허가 요청하고, fcmToken 받아오기!
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("알림 권한 허용~!!");

        // fcmToken을 받는 함수 추가!!
        getToken(messaging)
          .then((fcmToken) => {
            // 콘솔에 fcmToken 출력
            console.log("fcm Token:", fcmToken);
            // 세션 스토리지에 fcmToken 저장
            sessionStorage.setItem("fcmToken", fcmToken);
          })
          .catch((err) => {
            console.error("fcm Token 받는 과정에서 에러:", err);
            sessionStorage.setItem("fcmToken", "");
          });
      } else {
        console.error("허가 받는 과정에서 에러");
        sessionStorage.setItem("fcmToken", "");
      }
    })
    .catch((err) => {
      console.error("잘못된 요청인 경우:", err);
      sessionStorage.setItem("fcmToken", "");
    });

  // // // onMessage함수를 통해, 활성 상태 및 포그라운드 상태일때 fcm메시지 수신
  onMessage(messaging, (payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: logo,
    };
    new Notification(notificationTitle, notificationOptions);

    // self.registration.showNotification(notificationTitle, notificationOptions);
    //   // console.log("포그라운드에서 받은 알림 Title:", payload.notification.title);
    //   // console.log("포그라운드에서 받은 알림 Body:", payload.notification.body);
  });
};

export default NotificationInApp;
