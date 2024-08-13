import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotificationInApp from "./components/Notification/NotioficationInApp";
// import NotificationFcmTokenAxios from "./components/Notification/NotificationFcmTokenAxios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trading from "./pages/Trading";
import Ranking from "./pages/Ranking";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import WebSocketTest from "./components/WebSocketTest";
import KakaoLogin from "./components/Login/KakaoLogin";

NotificationInApp();

function App() {
  return (
    <div className="min-w-[768px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trading/:stockId" element={<Trading />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/profile/:profilePageId" element={<Profile />} />
        <Route path="/test" element={<WebSocketTest />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
      </Routes>
    </div>
  );
}

export default App;
