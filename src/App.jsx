import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trading from "./pages/Trading";
import Ranking from "./pages/Ranking";
import Profile from "./pages/Profile";
import Header from "./components/Header";

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

//허가 요청하고, 토큰 받아오기!
Notification.requestPermission()
  .then((permission) => {
    if (permission === "granted") {
      console.log("알림 권한 허용~!!");

      // 토큰을 받는 함수 추가!!
      getToken(messaging)
        .then((token) => {
          // 콘솔에 토큰 출력
          console.log("fcm Token:", token);
        })
        .catch((err) => {
          console.error("fcm Token 받는 과정에서 에러:", err);
        });
    } else {
      console.error("허가 받는 과정에서 에러");
    }
  })
  .catch((err) => {
    console.error("잘못된 요청인 경우:", err);
  });

// onMessage함수를 통해, 활성 상태 및 포그라운드 상태일때 FCM 메시지 수신
onMessage(messaging, (payload) => {
  console.log("포그라운드에서 받은 알림:", payload);
  // self.registration.showNotification(notificationTitle, notificationOptions);
  // console.log("포그라운드에서 받은 알림 Title:", payload.notification.title);
  // console.log("포그라운드에서 받은 알림 Body:", payload.notification.body);
});

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/ranking" element={<Ranking />} />
        {/* <Route path="/profile/:id" element={<Profile />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
