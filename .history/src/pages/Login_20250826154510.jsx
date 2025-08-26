import "../scss/login.css";
import React from "react";
import { FaRegUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="login">
      <h1 className="login___title">Login</h1>
      <div className="login___form">
        <div className="login__input-group">
          <div className="login__input-wrapper">
            <FaRegUser className="login__icon"/>
            <input className='login__input' type="emai" placeholder="Email" />
          </div>
          <div className="login__input-wrapper">
            <FaLock className="login__icon" />
            <input className='login__input' type="password" placeholder="Password"/>
          </div>
        </div>
      </div>
      <p>Lost your password ?</p>
      <button className="login">Log in</button>
      <p>New user ? Please Register</p>
    </div>
  );
};

export default Login;
