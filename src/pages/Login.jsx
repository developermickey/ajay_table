import React, { useState } from 'react';
import './Login.css';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the input fields
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    // Clear the error message
    setErrorMessage('');

    console.log(`Username: ${username}, Password: ${password}`);
    navigate('/table');
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className={errorMessage ? 'error' : ''} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

