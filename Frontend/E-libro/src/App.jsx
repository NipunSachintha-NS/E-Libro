import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from "./components/AuthForm"
import RegistrationForm from "./components/RegistrationForm"

import HomePage from "./Pages/HomePage"
function App() {
  

  return (
    <>
       <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/signup" element={<RegistrationForm />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
