import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import * as MUTATION from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import BoneLogo from "../assets/images/big-boner.png"
import "../assets/css/index.css"

const CreateUserForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  // const { name, email, password } = user;
  const [createUser, {loading}] = useMutation(MUTATION.ADD_USER)

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const {data} = await createUser({
      variables: {...user}
    });
    Auth.login(data.addUser.token)
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div className="signup-page-cont">
    <form onSubmit={handleSubmit}>
      <div className="signup-page">
        <img src={BoneLogo} alt="Bone Logo"/>
        <h1>Sign <span className="blue-span">Up</span></h1>
        <input
          placeholder="Enter Name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create User</button>
        <p>
        Already have an account? <Link to="/signInPage">Sign In</Link>
      </p>
      </div>
    </form>
  </div>
  );
};

export default CreateUserForm;
