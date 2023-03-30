import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import * as MUTATION from '../utils/mutations';
import Auth from '../utils/auth';
import BoneLogo from "../assets/images/big-boner.png";
import "../assets/css/index.css";

function SignInPage() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [login, { loading }] = useMutation(MUTATION.LOGIN_USER);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...user },
      });
      Auth.login(data.login.token);
      setUser({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <div className="login-page-cont">
    <div className="login-page">
      <img src={BoneLogo} alt="Bone Logo"/>
      <h1>Sign <span className="blue-span">In</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Enter Email"
            type="email"
            value={user.email}
            onChange={(e) => handleInputChange(e.target.value)}
            required
          />
          <input
            placeholder="Enter Password"
            type="password"
            value={user.password}
            onChange={(e) => handleInputChange(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  </div>
  );
}

export default SignInPage;
