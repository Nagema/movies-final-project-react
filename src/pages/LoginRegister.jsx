import React from "react";
import "./LoginRegister.css";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

const LoginRegister = () => {
  return (
    <div className="login-register-container">
      <Register />
      <Login />
    </div>
  );
};

export default LoginRegister;
