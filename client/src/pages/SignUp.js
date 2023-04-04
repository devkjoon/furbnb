import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import * as MUTATION from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import BoneLogo from "../assets/images/big-boner.png"
import "../assets/css/index.css"

const CreateUserForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [createUser, {loading}] = useMutation(MUTATION.ADD_USER)

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      setUser({ ...user, [name]: value, name: user.firstName + " " + user.lastName });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check that the passwords match
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const { data } = await createUser({
      variables: { ...user, name }
    });

    console.log(data);
    Auth.login(data.addUser.token)
    setUser({ firstName: '', lastName: '', email: '', address: '', phoneNumber: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="signup-page-cont">
      <form onSubmit={handleSubmit}>
        <div className="signup-page">
          <img src={BoneLogo} alt="Bone Logo"/>
          <h1>Sign <span className="blue-span">Up</span></h1>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Address"
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Phone Number"
            type="text"
            name="phoneNumber"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
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
