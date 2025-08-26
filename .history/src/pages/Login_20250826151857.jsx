import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <div className="input-item">
          <input type="email" />
        </div>
        <div className="input-item">
          <input className="" type="password" />
        </div>
      </div>
      <button className="btn-login">Log in</button>
      
    </div>
  );
};

export default Login;
