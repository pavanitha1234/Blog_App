import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Form} from "react-router-dom";
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); //user is authenticated or not

  //if the user is not logged in, login link will be shown otherwise login link wont be shown in the navbar instead logout is shown
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear(); //clear the localstorage
      setIsAuth(false); //false - means we are not logged in anymore
      window.location.pathname = "/login";
    });
  }

  return (
    <Router>
      <nav>
        <Link to="/" >Home</Link>
        {!isAuth ? (<Link to="/login" >Login</Link>) : (<><Link to="/createpost" >CreatePost</Link><div className='logbutton'><button className='logout' onClick={signUserOut}> Log Out </button></div></>)} 
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;

