import React from "react";
import LoginForm from "../components/Login/LoginForm";
import LoginInfo from "../components/Login/LoginInfo";

const Login = () => {
  return (
    <div className="pt-24">
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
