import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Go back to <Link to="/">Home</Link> or your <Link to="/user/dashboard">Dashboard</Link>.</p>
    </div>
  );
};

export default NotFound;

