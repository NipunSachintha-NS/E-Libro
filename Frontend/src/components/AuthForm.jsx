import { Link,useNavigate } from 'react-router-dom';
import './AuthForm.css'; 
import { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {

  const[name, setName] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/users/login', {name, password})
      .then(result => {console.log(result)
        if(result.data == "Login Succussfuly"){
            navigate('/book')
        }
      })
      .catch(err => console.log(err))
    }
  
  return (
    <div className="auth-container">
      <h1 className="auth-title">E-Libro</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="auth-form">
          <input type="text" placeholder="Username" className="auth-input" 
            onChange={(e) => setName(e.target.value)}/>
          
          <input type="password" placeholder="Password" className="auth-input" 
            onChange={(e) => setPassword(e.target.value)}/>

            <button type ='submit' className="auth-button">Log In</button>

          <div className="auth-divider">
            <hr className="auth-line" /> or <hr className="auth-line" />
          </div>

          <Link to="/signup">
          <button className="auth-button">Register</button>
          </Link> 
        </div>
      </form>

    </div>
  );
};

export default AuthForm;
