import './App.css';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

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
  return (
    <div className="App">
      <nav>
        <img src={require("./assets/logo.png")}/>
        <Login />
      </nav>

    </div>
  );
}

function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
    document.write("yes")
  }
  return (
    <>
    <h2>jerremy is dum dum!</h2>    
    <form>
      <label for="email">email</label>
      <input value={email} type='email' placeholder='youremail@email.com'></input>
      <label for='password'>password</label>
      <input value={password} type='password' placeholder='password'></input>
      <button>Login</button>
    </form>

    <br></br>
    <div>or</div>
    <br></br>
    <button onClick={googleLogin}>Google Login</button>
    </>

  )
}
