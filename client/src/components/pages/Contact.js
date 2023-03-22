import React, { useState } from 'react';
import './../assets/Contact.css';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevState) => ({ ...prevState, [name]: 'This field is required.' }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: null }));
    }
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'This field is required.';
    }
    if (email.trim() === '') {
      errors.email = 'This field is required.';
    }
    if (message.trim() === '') {
      errors.message = 'This field is required.';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log({ name, email, message });
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>Send me a message</h1>
        <p>If you have any questions or would like to get in touch, please fill out the form below or email me directly at kirchnerdev22@gmail.com.
</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} onChange={handleInputChange} required></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="submit">Send</button>
        </form>
      </div>
    </>
  );
}
