import { Link } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <h2 className="registration-title">E-Libro</h2>
      <form className="registration-form">
        <div className="form-group">
          <input type="text" placeholder="UserName :" className="form-inputs" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="ContactNo :" className="form-inputs" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password :" className="form-inputs" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password :" className="form-inputs" />
        </div>
        <button type="submit" className="register-button">Register</button>
        <p className="login-links">
          Do you have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
