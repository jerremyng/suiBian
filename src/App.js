import './App.css';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtCKR5oHaQcmb4ff8LVXZDt8XP2vl6RLc",
  authDomain: "suibian-6654f.firebaseapp.com",
  databaseURL: "https://suibian-6654f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suibian-6654f",
  storageBucket: "suibian-6654f.appspot.com",
  messagingSenderId: "272835399367",
  appId: "1:272835399367:web:bd4dd1d1a10a4b9bfbf8e2",
  measurementId: "G-95Z540EN96"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function App() {

  const isLogin = !useAuthState(auth);

  return (
    <div className="App">
      <nav>
        <img src={require("./assets/logo.png")}/>
      </nav>

      {isLogin ? <br/> : <Login/>}
    </div>
  );
}

function Login() {

  //login things
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.write(errorCode + errorMessage)
    })
  }

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
    //document.write("yes")
  }

  //main code
  return (
    <> 
    <h2>Welcome</h2>    
    <h4>please sign in</h4>
    <form onSubmit={handleSubmit}>
      <label for="email">email</label>
      <input value={email} type='email' placeholder='youremail@email.com'></input>
      <label for='password'>password</label>
      <input value={password} type='password' placeholder='password'></input>
      <button type='submit'>Login</button>

    </form>
    <button>Dont have an account?</button>

    <br></br>
    <div>or</div>
    <br></br>
    <button onClick={googleLogin}>Google Login</button>
    </>

  )
}

function Register() {
  
  //login things
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.write(errorCode + errorMessage)
    })
  }

  //main code
  return (
    <> 
    <h2>Create Account</h2>    
    <form onSubmit={handleSubmit}>
      <label for="email">email</label>
      <input value={email} type='email' placeholder='youremail@email.com'></input>
      <label for='password'>password</label>
      <input value={password} type='password' placeholder='password'></input>
      <label for='password2'>Re-enter password</label>
      <input value={password2} type='password' placeholder='re-enter password'></input>
      <button type='submit'>Login</button>

    </form>
    <button>Already have an account?</button>
    </>

  )
}
