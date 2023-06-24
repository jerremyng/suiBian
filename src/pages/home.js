import { fireBaseAuth } from '../firebase.js'
import Navbar from '../components/Navbar.js';
import React, { useState } from 'react';
import "../Styles/home.css";
import "../Styles/Searchbar.css";
import { Searchbar } from "../components/Searchbar";
import Backtop from "../components/Backtop.js"
import { Foodscroller } from '../components/Foodscroller.js';
export default function Home() {

    var user = fireBaseAuth.currentUser;
    return (
        <>
            <Navbar />
            <section id='find'>

                {/* {user == null 
                    ? <h2>Let Suibian be your guide</h2> 
                    : <h2>Welcome Back {user.email}</h2>} */}
                    <div className='welcome'>
                        <h2 className='dont'>Whats for Lunch?</h2>
                        <img src={require("../assets/smol.png")}
                            style={{ height: 250 }}/>
                    </div>
                    <Searchbar/>
            </section>        

                <section id='discover'>
                    <h2>Discover</h2>
                    <p>Your new favourite hangouts!</p>
                    <Foodscroller/>
                </section>
            <Backtop/>
            
        </>
    );
}
