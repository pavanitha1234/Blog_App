import React from 'react';
import { auth, provider } from '../firebase';
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  //we use useNavigate function to navigate to home page after login through google auth.
  //before using useNavigate, after authentication we will be in login page itself

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true); //local storage will some identifier to indentify whether the user is logged in or not.
        setIsAuth(true); //now you are logged in
        navigate("/"); //after auth navigate to home page
    });
  }; 

  return (
    <div className='loginPage'>
        <p>Sign-in with Google to continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign-in with Google</button>
    </div>
  );
}

export default Login;