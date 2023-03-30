import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import BoneLogo from "../assets/images/big-boner.png";
import "../assets/css/index.css";
import { LOGIN_USER } from "../utils/mutations";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      // handle successful login
      console.log(data.login);
    } catch (err) {
      console.log(err);
      // handle failed login
    }
  };

  return (
    <div className="login-page-cont">
      <div className="login-page">
        <img src={BoneLogo} alt="Bone Logo" />
        <h1>Sign In</h1>
        {error && <p className="error-message">{error.message}</p>}
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
