importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD-75FRsaAEs1znFjbXmsmVDAzJpw8WToo",
  authDomain: "chickenstock-noti.firebaseapp.com",
  projectId: "chickenstock-noti",
  storageBucket: "chickenstock-noti.appspot.com",
  messagingSenderId: "218149229472",
  appId: "1:218149229472:web:c08a13d6182b024689cac5",
  measurementId: "G-B3P9Y23XX0",
};
firebase.initializeApp(firebaseConfig);

// self.addEventListener("install", function (e) {
//   console.log("fcm 서비스 워커 install..");
//   self.skipWaiting();
// });

// self.addEventListener("activate", function (e) {
//   console.log("fcm 서비스 워커 활성화!!");
// });

// self.addEventListener("push", function (e) {
//   // console.log("push: ", e.data.json());
//   if (!e.data.json()) return;

//   const resultData = e.data.json().notification;
//   const notificationTitle = resultData.title;
//   const notificationOptions = {
//     body: resultData.body,
//     icon: resultData.image,
//     tag: resultData.tag,
//     ...resultData,
//   };
//   // console.log("push: ", { resultData, notificationTitle, notificationOptions });
//   // console.log("push: ", { resultData });

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// onBackgroundMessage 함수를 통해 백그라운드 상태일 때 FCM 메시지 수신
const messaging = firebase.messaging();
// messaging.onBackgroundMessage((payload) => {
//   // console.log("[firebase-messaging-sw.js] Received background message ");
//   // // 알림 Customize
//   // const notificationTitle = "Background Message Title";
//   // const notificationOptions = {
//   //   body: "Background Message body.",
//   //   icon: "/firebase-logo.png",
//   // };
//   // self.registration.showNotification(notificationTitle, notificationOptions);
// });

// // 알림 클릭시, 특정 url로 이동
// self.addEventListener("notificationclick", function (event) {
//   console.log("notification click");
//   const url = "/";
//   event.notification.close();
//   event.waitUntil(clients.openWindow(url));
// });
