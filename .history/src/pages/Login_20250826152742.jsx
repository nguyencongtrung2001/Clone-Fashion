
import React from "react";
import { FaRegUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="Login">
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <div className="input-item">
          <input type="email" />
          <FaRegUser />
        </div>
        <div className="input-item">
          <input className="" type="password" />
          <FaLock />
        </div>
      </div>
      <button className="btn-login">Log in</button>
      <p>New user ? Please Register</p>
    </div>
  );
};

export default Login;
