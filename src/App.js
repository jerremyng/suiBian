import { useAuthState } from 'react-firebase-hooks/auth'
import { fireBaseAuth } from './firebase.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

//pages
import Home from './pages/home.js';
import Login from './pages/loginpage.js'

//components

import Navbar from './components/Navbar.js';
import './App.css';

export default function App() {
  // const isLogin = !useAuthState(fireBaseAuth);

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login/>} />
        </Routes>
      </Router>

    </div>

  );
}

