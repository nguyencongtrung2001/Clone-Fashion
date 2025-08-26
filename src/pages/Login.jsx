// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa";
import "../scss/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    // Có thể tích hợp Redux Thunk hoặc React Query sau
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__input-group">
          <div className="login__input-wrapper">
            <FaRegUser className="login__icon" />
            <input className="login__input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="login__input-wrapper">
            <FaLock className="login__icon" />
            <input className="login__input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
        </div>
        <Link to="/forgot-password" className="login__link">
          Lost your password?
        </Link>
        <button type="submit" className="login__button">
          Log in
        </button>
        <p>
          New user?{" "}
          <Link to="/register" className="login__link">
            Please Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;