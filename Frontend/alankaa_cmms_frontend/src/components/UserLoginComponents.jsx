// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', {
        username,
        password,
      });
      console.log(response.data); // Handle success, e.g., redirect to user dashboard
    } catch (error) {
      console.error('Error during user login:', error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
