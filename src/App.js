import { useAuthState } from 'react-firebase-hooks/auth'
import { fireBaseAuth } from './firebase.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';


//pages
import Home from './pages/home.js';
import Login from './pages/loginpage.js';
import About from './pages/about.js';

//components
import './App.css';

export default function App() {
  // const isLogin = !useAuthState(fireBaseAuth);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>

    </div>

  );
}

