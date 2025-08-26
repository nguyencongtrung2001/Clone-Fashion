import "../scss/login.css"
import React from "react";
import { FaRegUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="login">
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <div className="input-item">
          <input className="input" type="email"  placeholder="Email"/>
          <FaRegUser />
        </div>
        <div className="input-item">
          <input className="" type="password" placeholder="Password" />
          <FaLock />
        </div>
      </div> 
      <button className="btn-login">Log in</button>
      <p>New user ? Please Register</p>
    </div>
  );
};

export default Login;
