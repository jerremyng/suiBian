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
      <div className='inner-container'>
        <div className='inner2'>
          <div className='heading'>
            <h4 className='header1'>Sign Up or Log In</h4>
          </div>

      <form onSubmit={handleSubmit}>
        
        <label for="email">email</label>
        <br></br>
        <input value={email} type='email' placeholder='youremail@email.com'></input>
        <br></br>
        <br></br>
        <label for='password' className='passwordLabel'>password</label>
        <br></br>
        <input 
          value={password} 
          type='password' 
          placeholder='password' 
          className='passwordBox'></input>
        <br></br>
        <button type='submit'
          className='submitButton'>Login</button>
  
      </form>
      <a src="" className='register'>Dont have an account?</a>
  
      <br></br>
      <div>or</div>
      <br></br>
  
      <div id='providers'>
        <button 
          onClick={googleLogin}
          className='googleLogin'>Continue with Google</button>
        <button 
          onClick={facebookLogin}
          className='facebookLogin'>Continue with Facebook</button>
      </div>
      </div>
      </div>
      </div>
  
    )
  }