import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const AddUser = ({ history }) => {
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await addUser({
        variables: {
          name: userFormData.name,
          email: userFormData.email,
          password: userFormData.password,
        },
      });

      // Reset form values
      setUserFormData({
        name: '',
        email: '',
        password: '',
      });

      // Navigate back to homepage
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={userFormData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userFormData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={userFormData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;