import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      // Make API request to login endpoint
      const response = await axios.post('/login', { email, password });

      // Update authentication state (e.g., store token in context)
      login(response.data.token);

      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        {/* Input fields for email and password */}
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;

