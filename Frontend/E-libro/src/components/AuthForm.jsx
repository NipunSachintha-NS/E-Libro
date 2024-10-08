import { Link } from 'react-router-dom';

import './AuthForm.css'; 

const AuthForm = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-title">E-Libro</h1>
      <div className="auth-form">
        <input type="text" placeholder="Username" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <Link to="/book"> <button className="auth-button">Log In</button></Link>
        <div className="auth-divider">
          <hr className="auth-line" /> or <hr className="auth-line" />
        </div>
        <Link to="/signup">
        <button className="auth-button">Register</button>
        </Link> 
         </div>
    </div>
  );
};

export default AuthForm;
