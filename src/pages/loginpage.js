import { useState } from 'react';
import {createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { fireBaseAuth } from '../firebase.js';

export default function Login() {

    //login things
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(fireBaseAuth, email, password)
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.write(errorCode + errorMessage)
      })
    }
  
    const googleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(fireBaseAuth,provider);
      //document.write("yes")
    }
  
    const facebookLogin = () => {
      const provider = new FacebookAuthProvider();
      signInWithRedirect(fireBaseAuth,provider);
    }
  
    //main code
    return (
      <div className='auth-form-container'>  
      <h4>Sign Up or Log In`</h4>
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input value={email} type='email' placeholder='youremail@email.com'></input>
        <br></br>
        <br></br>
        <label for='password'>password</label>
        <input value={password} type='password' placeholder='password'></input>
        <br></br>
        <button type='submit'>Login</button>
  
      </form>
      <a src="">Dont have an account?</a>
  
      <br></br>
      <div>or</div>
      <br></br>
  
      <div id='providers'>
        <button onClick={googleLogin}>Continue with Google</button>
        <button onClick={facebookLogin}>Continue with Facebook</button>
      </div>
      </div>
  
    )
  }