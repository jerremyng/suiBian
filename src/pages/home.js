import FoodLocation from '../components/FoodLocation.js';
import { trialdata } from '../data/trialdata.js';
import { fireBaseAuth } from '../firebase.js'

import Navbar from '../components/Navbar.js';
import React, { useState } from 'react';
import "../Styles/home.css";
import "../Styles/Searchbar.css";
import { Searchbar } from "../components/Searchbar";



export default function Home() {

    var user = fireBaseAuth.currentUser;
    return (
        <>
            <Navbar />
            <section>
                <div className='tophalf'>
                    <div className='fake-header'>

                        <div className='div2'>
                            {user == null 
                            ? <h2>Let Suibian be your guide</h2> 
                            : <h2>Welcome Back {user.email}</h2>}
                        </div>
                    </div>

                    <div className='mid'> 
                        <h2 className='dont'>Whats for Lunch?</h2>
                        <img src={require("../assets/smol.png")}
                            style={{ height: 300 }}/>
                    </div>
                    <Searchbar/>             
                </div>
                
                {/* <div className='bottomhalf'>
                    <h1 className='what'>what's new</h1>
                    <div className='locationList'>
                        {trialdata.map((foodLocation, key) => {
                            return (
                                <FoodLocation
                                    key={key}
                                    image={foodLocation.image}
                                    name={foodLocation.name}
                                    location={foodLocation.location} />
                            );
                        })}
                        <br></br>
                    </div> */}
                    

            </section>
            
        </>
    );
}
