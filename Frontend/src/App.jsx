import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from "./components/AuthForm"
import RegistrationForm from "./components/RegistrationForm"
import HomePage from "./Pages/HomePage"
import Book from './Pages/Content/Book';
import Profile from './Pages/Content/Profile';
import Edit from './Pages/Content/Edit';
import Report from './Pages/Content/Report';
import AddBook from './components/AddBook';
import EditeBook from './components/EditeBook';

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
      <Route path="/addBook" element={<AddBook/>}/>
      <Route path="/Edit" element={<Edit/>}/>
      <Route path ="/Bedit" element = {<EditeBook/>}/>

        </Routes>
        </Router>
    </>
  )
}

export default App
