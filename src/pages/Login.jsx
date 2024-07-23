import React from "react";
import LoginForm from "../components/Login/LoginForm";
import LoginInfo from "../components/Login/LoginInfo";

const Login = () => {
  return (
    <div className="py-20 bg-blue-50">
      <p className="w-full bg-red-200 text-center">로그인 페이지입니당~!!</p>
      <div className="w-full h-full flex justify-between items-center px-20">
        <div className="flex-1">
          <LoginForm />
        </div>
        <div className="flex-1">
          <LoginInfo />
        </div>
      </div>
    </div>
  );
};

export default Login;
