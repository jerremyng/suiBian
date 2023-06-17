import React from "react";
import { Link } from 'react-router-dom';


function FoodLocation({ image, name, location }) {
    return (
      <div className="foodLocation">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h3> {name} </h3>
        <h3 className="med"> {location} </h3>
        <Link to="/about">
          <button>Find out more</button>
        </Link>
      </div>
    );
  }
  
  export default FoodLocation;


  // {trialdata.map((foodLocation, key) => {
  //   return (
  //       <FoodLocation
  //           key={key}
  //           image={foodLocation.image}
  //           name={foodLocation.name}
  //           location={foodLocation.location}