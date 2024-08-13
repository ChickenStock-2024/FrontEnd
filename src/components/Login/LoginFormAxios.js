import axios from "axios";

const LoginFormAxios = ({ email, password, setEmail, setPassword }) => {
  axios({
    method: "POST",
    url: "/auth/login/email",
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // sessionStorage에 토큰, 이메일, 닉네임, 로그인유무를 저장
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("nickname", data.nickname);
      sessionStorage.setItem("isLogined", true);
      // sessionStorage에 저장된 search 값을 가져옴
      console.log(window.sessionStorage.getItem("email"));
      // alert(`안녕하세요, ${response.data.nickname}님`);
      if (data.hedaers.token) {
        // 로그인 성공시 메인 페이지로!
        nav("/");
      } else {
        alert("이메일 혹은 패스워드를 확인해주세요.");
      }
    })
    // .catch((error) => alert(error.message));
    .catch((error) => {
      alert(error.message);
    });

  setEmail("");
  setPassword("");
};
export default LoginFormAxios;
