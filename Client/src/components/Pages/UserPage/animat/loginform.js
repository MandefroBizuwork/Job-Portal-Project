import React, { useState } from 'react';
import './animations.css';

function LoginForm() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(true); // Show form on button click
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Show Login Form
      </button>

      <div className={`login-form ${isFormVisible ? 'show' : ''}`}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="button">Submit</button>
      </div>
    </div>
  );
}

export default LoginForm;
