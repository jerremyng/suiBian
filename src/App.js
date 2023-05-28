//packages
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';


//pages
import Home from './pages/home.js';
import Loginpage from './pages/loginpage.js';
import About from './pages/about.js';

//components
import './App.css';

export default function App() {
  // const isLogin = !useAuthState(fireBaseAuth);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Loginpage/>} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>

    </div>

  );
}

