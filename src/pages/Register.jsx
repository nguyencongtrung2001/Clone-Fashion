// src/pages/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa";
import "../scss/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted:", { email, password });
  };

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__input-group">
          <div className="register__input-wrapper">
            <FaRegUser className="register__icon" />
            <input
              className="register__input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="register__input-wrapper">
            <FaLock className="register__icon" />
            <input
              className="register__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="register__button">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/" className="register__link">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;