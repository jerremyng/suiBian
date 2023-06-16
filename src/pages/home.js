import FoodLocation from '../components/FoodLocation.js';
import { trialdata } from '../data/trialdata.js';

import { fireBaseAuth } from '../firebase.js'
import Navbar from '../components/Navbar.js';
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';
import "../Styles/home.css";
import "../Styles/Searchbar.css";
import { Searchbar } from "../components/Searchbar";
import { SearchResultsList } from "../components/SearchResultsList";

export default function Home() {

    var user = fireBaseAuth.currentUser;
    const [results, setResults] = useState([]);
    return (

        <><React.Fragment>
            <Navbar />
        </React.Fragment>
            <section>
                <div className='tophalf'>
                    <div class="div1">
                        {user == null 
                        ? <h2>Let Suibian be your guide</h2> 
                        : <h2>Welcome Back {user.email}</h2>}
                        {/* <h2>Let SuiBian be your guide</h2> */}
                        <button className='lucky'>Generate</button>
                        <Searchbar setResults={setResults}/>
                        {results && results.length > 0
                        && <SearchResultsList results = {results} />}
                    </div>
                    {/* <div class="div3">
                        <img src={require("../assets/smol.png")}/>
                    </div> */}
                    <div className='div4'>
                        <img src={require("../assets/logo2.png")}
                    style={{ width: 140, height: 140 }}
                    className="logo" />
                    </div>
                    {/* <div className='div2'>
                        <Searchbar setResults={setResults}/>
                    {results && results.length > 0
                    && <SearchResultsList results = {results} />}
                        
                    </div> */}
                </div>
                <div className='bottomhalf'>
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
                    </div> 
                    
                </div>

            </section>
            
            </>
    );
}

// import FoodLocation from '../components/FoodLocation.js';
// import { trialdata } from '../data/trialdata.js';
// import Navbar from '../components/Navbar.js';
// import React from 'react';
// import "../Styles/home.css";
// import { Link } from "react-router-dom";

// import "../Styles/Searchbar.css";

// export default function Home() {
//     //const root = ReactDOM..createRoot(document.getElementById('root'));

//     return (
//         <><React.Fragment>
//             <Navbar />
//         </React.Fragment>
//             <div>
//                 <div className='tophalf'>
//                     {/* <h2><span> Let  randomness  be  your  guide </span></h2> 
//                     <Link to="/about">
//                         <button className='lucky'>generate now!</button>
//                     </Link>
//                     <h2 className='or'>or, be your own</h2>
//                     <SearchBar/> */}
//                     <div class="div1">
//                         <h2>Let SuiBian be your guide</h2>
//                         <button className='lucky'>Generate</button>
//                     </div>
//                     <div class="div3">
//                         <img src={require("../assets/smol.png")}/>
//                     </div>
//                     <div className='div4'>
//                         <img src={require("../assets/logo2.png")}
//                     style={{ width: 140, height: 140 }}
//                     className="logo" />
//                     </div>
//                 </div>
//                 <div className='bottomhalf'>
//                     <h1 className='what'>what's new</h1>
//                     <div className='locationList'>
//                         {trialdata.map((foodLocation, key) => {
//                             return (
//                                 <FoodLocation
//                                     key={key}
//                                     image={foodLocation.image}
//                                     name={foodLocation.name}
//                                     location={foodLocation.location} />
//                             );
//                         })}
//                         <br></br>
//                     </div> 
                    
//                 </div>
//             </div>
//             {/* <div>
//                 <Footer/>
//             </div> */}
            
//             </>
//     );
// }