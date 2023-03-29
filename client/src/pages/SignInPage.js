import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoneLogo from "../assets/images/big-boner.png"
import "../assets/css/index.css"

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic
  };

  return (
  <div className="login-page-cont">
    <div className="login-page">
      <img src={BoneLogo} alt="Bone Logo"/>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  </div>
  );
}

export default SignInPage;
