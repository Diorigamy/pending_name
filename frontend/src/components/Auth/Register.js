import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    location:'',
    skills:'',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
	
  const handleRegister = async (e) => {
  e.preventDefault();

    // Client-side validation
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

     // Call the register function
    await register(formData);
    // Redirect to login or handle as needed
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />

	   <label>Location:</label>
        <input type="text" name="location" onChange={handleChange} />

        <label>Skills:</label>
        <input type="text" name="skills" onChange={handleChange} />

	{/* Display validation errors */}
        {errors.username && <p>{errors.username}</p>}
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

