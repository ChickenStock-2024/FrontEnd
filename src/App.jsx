import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trading from "./pages/Trading";
import Ranking from "./pages/Ranking";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
