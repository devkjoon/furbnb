import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import * as MUTATION from '../utils/mutations';
import Auth from '../utils/auth';


function SignInPage() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [login, {loading}] = useMutation(MUTATION.LOGIN_USER)
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // handle login logic
    const {data} = await login({
      variables: {...user}
    });
    Auth.login(data.login.token)
    setUser({email: '', password: '' });
  };


  return (
    <div className="Login-page">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name ="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default SignInPage;
