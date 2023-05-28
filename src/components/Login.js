import { useState } from 'react';
import { collection , doc, getDoc, setDoc } from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import { fireBaseAuth, fireBaseStore } from '../firebase.js';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const handleEmailChange = (e) => {
      e.preventDefault();
     setEmail(e.target.value);
     };

    const [password, setPassword] = useState('')
    const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

    const checkEmail = (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(fireBaseAuth, email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        navigate('/home')
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.write(errorCode + errorMessage)
      })
    }
  
    const googleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(fireBaseAuth,provider)
      .then((result) => {
        var user = result.user;
        navigate('/home')
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.write(errorCode + errorMessage)
      })
    })
    }
  
    //main code
    return (
      <div className='auth-form-container'>  
      <h4>Enter your email!</h4>
      {/* <EmailForm /> */}

      <form onSubmit={checkEmail}>
      <label for='email' className='emailLabel'>Email</label>
      <br></br>
        <input value={email} onChange={handleEmailChange} type='email' placeholder='Email'></input>
        <br></br>
        <label for='password' className='passwordLabel'>password</label>
        <br></br>
        <input 
          value={password}
          onChange={handlePasswordChange} 
          type='password' 
          placeholder='password' 
          className='passwordBox'></input>
        <br></br>
        <button type='submit'
          className='submitButton'>Login</button>
      </form>
  
      <br></br>
      <div>or</div>
      <br></br>
  
      <div id='providers'>
        <button 
          onClick={googleLogin}
          className='googleLogin'>Continue with Google</button>
      </div>
      </div>
    )
  }

function EmailForm() {
  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const checkEmail = (e) => {
    e.preventDefault()

    const db = fireBaseStore
    const userRef1 = collection(db, "users");
    
    setDoc(doc(userRef1, email), {name: "bob"});

    
    const userRef = doc(db, 'users', email);
    const user = getDoc(userRef)

    if (!user.exists) {
      console.log('No such user!');
      return( 
      <h2>create an account!</h2>
      )
    } else {
      console.log(user.data())
      // return <Password />
    }


  }

  return (
    <form onSubmit={checkEmail}>
      <input
        value={email} 
        onChange={handleEmailChange} 
        type='email' 
        placeholder='Email'></input>
    <button type='submit'className='submitButton'>Continue</button>
  </form>
  )
}