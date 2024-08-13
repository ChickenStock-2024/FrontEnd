importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD-75FRsaAEs1znFjbXmsmVDAzJpw8WToo",
  projectId: "chickenstock-noti",
  messagingSenderId: "218149229472",
  appId: "1:218149229472:web:c08a13d6182b024689cac5",
};
firebase.initializeApp(firebaseConfig);

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

// [onnotificationclickd이용] 알림 클릭시, 특정 url로 이동
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();
  const url = "https://chickenstock.givendragon.site/trading";

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === url && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(url);
      })
  );
});

// // [onnotificationclickd이용] 알림 클릭시, 특정 url로 이동
// self.onnotificationclick = (event) => {
//   console.log("On notification click: ", event.notification.tag);
//   event.notification.close();
//   const url = "http://localhost:5173/trading";
//   // const url = "/trading";

//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(
//     clients
//       .matchAll({
//         type: "window",
//       })
//       .then((clientList) => {
//         for (const client of clientList) {
//           if (client.url === url && "focus" in client) return client.focus();
//         }
//         if (clients.openWindow) return clients.openWindow(url);
//       })
//   );
// };
