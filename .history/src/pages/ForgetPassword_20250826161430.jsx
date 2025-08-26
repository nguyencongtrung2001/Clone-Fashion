// src/pages/ForgetPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import "../scss/forgot-password.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
  };

  return (
    <div className="forgot-password">
      <h1 className="forgot-password__title">Forgot Password</h1>
      <form className="forgot-password__form" onSubmit={handleSubmit}>
        <div className="forgot-password__input-group">
          <div className="forgot-password__input-wrapper">
            <FaRegUser className="forgot-password__icon" />
            <input
              className="forgot-password__input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="forgot-password__button">
          Reset Password
        </button>
        <p>
          Back to{" "}
          <Link to="/" className="forgot-password__link">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;