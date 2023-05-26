import React from "react";

function FoodLocation({ image, name, location }) {
    return (
      <div className="foodLocation">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h3> {name} </h3>
        <p> {location} </p>
      </div>
    );
  }
  
  export default FoodLocation;