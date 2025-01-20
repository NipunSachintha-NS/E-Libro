import { Link } from 'react-router-dom';
import './RegistrationForm.css';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function RegistrationForm  ()  {

    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
      e.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        axios.post('http://localhost:3001/users/signup',{name,contactNo,password})
        .then(result => {console.log(result)
          alert('Registration successful!')
        navigate('/login')
        })
        .catch(err => console.log(err))
    }
  
  return (
    <div className="registration-container">
      <h2 className="registration-title">E-Libro</h2>
      <form className="registration-form"  onSubmit={handleSubmit}>

        <div className="form-group">
          <input type="text" htmlFor='email' placeholder="UserName :" className="form-inputs"
          onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" htmlFor='email' placeholder="ContactNo :" className="form-inputs" 
          onChange={(e) => setContactNo(e.target.value)}/>
        </div>

        <div className="form-group">
          <input type="password"  htmlFor='email'placeholder="Password :" className="form-inputs"
          onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="password" htmlFor='email' placeholder="Confirm Password :" className="form-inputs" 
          onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>

        <button type="submit" className="register-button">Register</button>
        <p className="login-links">
          Do you have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};


export default RegistrationForm