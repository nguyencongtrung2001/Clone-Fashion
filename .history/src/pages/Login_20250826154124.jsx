import "../scss/login.css"
import React from "react";
import { FaRegUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="login">
      <h1 className="login___title">Login</h1>
      <div className="login___form">
        <div className="input-item">
          <input className="input" type="email"  placeholder="Email"/>
          <FaRegUser />
        </div>
        <div className="input-item">
          <input className="input" type="password" placeholder="Password" />
          <FaLock />
        </div>
      </div> 
      <p>Lost your password ?</p>
      <button className="btn-login">Log in</button>
      <p>New user ? Please Register</p>
    </div>
  );
};

export default Login;
