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

        <><React.Fragment>
            <Navbar />
        </React.Fragment>
            <main>
                <div className='tophalf'>
                    <div className='fake-header'>
                        <div className='div1'>
                            <img src={require("../assets/logo2.png")}
                            style={{ width: 140, height: 140 }} />
                        </div>
                        <div className='div2'>
                            {user == null 
                            ? <h2>Let Suibian be your guide</h2> 
                            : <h2>Welcome Back {user.email}</h2>}
                            {/* <h2>Let SuiBian be your guide</h2> */}
                        </div>
                    </div>

                    <div className='mid'> 
                        <div className='div3'>
                            <h2 className='dont'>
                                don't know what to eat?
                            </h2>
                            <button className='lucky'>decide now!</button>
                        </div>
                        <div className='div4'>
                            <img src={require("../assets/smol.png")}
                                style={{ height: 300 }}/>
                        </div>
                    </div>
                    <div className='div5'>
                        <Searchbar/>
                    </div>
                    
                </div>

            </main>
            
            </>
    );
}
