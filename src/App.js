//import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { fireBaseAuth } from './firebase.js'

//components
import LoginForm from './components/Login.js';
import './App.css';

export default function App() {
  const isLogin = !useAuthState(fireBaseAuth);

  return (
    <div className="App">
      <NavBar />
      {isLogin ? <br/> : <LoginForm/>}
      
      <section>
        <input placeholder='Find a place'></input>
        <br />
        <div>Or</div>
        <button>Im feeling lucky</button>

        {/* maybe suggestions here */}
      </section>

    </div>

  );
}

function NavBar() {
  return (
    <nav>
      <ul>
        <img src={require("./assets/logo.png")}/>
        <li><a href="default.asp">Home</a></li>
        <button>Click to signin</button>
      </ul>
    </nav>
  )
  }