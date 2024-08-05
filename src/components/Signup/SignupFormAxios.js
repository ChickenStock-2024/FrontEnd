import axios from "axios";

const SignupFormAxios = ({ userData }) => {
  const { nickname, email, password, password_check } = userData;
  // navigate("/");
  axios({
    method: "POST",
    url: "http://10.13.13.2:8080/auth/signup",
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
    data: {
      email: email,
      password: password,
      password_check: password_check,
      nickname: nickname,
    },
  })
    .then((response) => {
      const data = response.data;
      console.log(data);

      // sessionStorage에 토큰, 이메일, 닉네임, 로그인유무를 저장
      // sessionStorage.setItem("token", data.token);
      // sessionStorage.setItem("email", data.email);
      // sessionStorage.setItem("nickname", data.nickname);
      // sessionStorage.setItem("isLogin", true);
      // sessionStorage에 저장된 search 값을 가져옴
      // console.log(window.sessionStorage.getItem("email"));
      // alert(`안녕하세요, ${response.data.nickname}님`);
      // if (data.headers.token) {
      alert("회원가입 완료~!!");
      // 회원가입 성공시 메인 페이지로!
      // navigate("/");
      // } else {
      // alert("가입정보를 확인해주세요.");
      // }
    })
    .catch((error) => {
      console.log(error);
      alert("가입에 실패했습니다: " + error.response.data.message);
    });
};

export default SignupFormAxios;
