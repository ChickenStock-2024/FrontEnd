import { defaultInstance } from "../../api/axios";

// 1. 로그아웃 클릭시, 로그아웃 axios
const PostLogout = async (nav, clearLoginUserInfo, setCheckKaKaoUser) => {
  try {
    const response = await defaultInstance.post("/auth/logout");

    // # 1.1. 로그아웃 axios 보내면서, 로그인한 유저 정보 삭제
    clearLoginUserInfo();
    localStorage.clear();
    sessionStorage.clear();
    // setCheckKaKaoUser({ checkKaKaoUser: false });

    // # 1.2. 로그아웃 완료 알림
    alert("로그아웃 완료~!!");
    // console.log(response);
    nav("/");
  } catch (error) {
    console.log(error);
    localStorage.clear();
    sessionStorage.clear();
    alert(
      "로그아웃 실패: " +
        (error.response ? error.response.data.message : error.message)
    );
    nav("/");
  }
};
export default PostLogout;
