import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from "./components/AuthForm"
import RegistrationForm from "./components/RegistrationForm"

import HomePage from "./Pages/HomePage"
import Book from './Pages/Content/Book';
import Profile from './Pages/Content/Profile';
import Report from './Pages/Content/Report';
function App() {
  

  return (
    <>
       <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/book" element = {<Book/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/report" element={<Report/>}/>
        </Routes>
        </Router>
    </>
  )
}

export default App
