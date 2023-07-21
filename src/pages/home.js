import { fireBaseAuth } from '../firebase.js'
import Navbar from '../components/Bar.js';
import React, { useState } from 'react';
import "../Styles/home.css";
import "../Styles/Searchbar.css";
import { Searchbar } from "../components/Searchbar";
import Backtop from "../components/Backtop.js"
import { Foodscroller } from '../components/Foodscroller.js';
import Searchbar2 from '../components/Searchbar2.js';

export default function Home() {

    var user = fireBaseAuth.currentUser;
    return (
        <>
            <Navbar />
            <section id='find'>

                {/* {user == null 
                    ? <h2>Let Suibian be your guide</h2> 
                    : <h2>Welcome Back {user.email}</h2>} */}
                <div className='section-title'>
                    <h2 className='dont'>Whats for Lunch?</h2>
                    <img src={require("../assets/smol.png")}
                        style={{ height: 250 }}/>
                </div>
                <Searchbar/>
                <Searchbar2/>
            </section>        

                <section id='discover'>
                    <div className='section-title'>
                        <h2>Discover</h2>
                        <p>Your new favourite hangouts!</p>
                    </div>

                    <Foodscroller/>
                </section>
            <Backtop/>
            
        </>
    );
}

