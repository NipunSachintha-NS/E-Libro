import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="Home-container">
      <div className="Home-content">
        <h1 className="Home-title">E-Libro</h1>
        <p className="Home-message">
          "Home to your personal e-library. Start managing your books!"
        </p>
        <Link to ="/signup"><button className="Home-button"> Get Started</button></Link>
        
        <p className="login-link">
          Do you have an account? <Link to ="/login">Log In</Link>
        </p>
      </div>
      <div className="Home-image">
        <img src="/src/assets/f89e8492ea5acb393bacb09c1a9699f2.jpeg" alt="E-Library illustration" />
      </div>
    </div>
  );
};

export default HomePage;
