import React from "react";
import { Link } from 'react-router-dom';

export default function FoodLocation({image, name, location}) {
  return (
    <div className="foodLocation">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <h3 className="med"> {location} </h3>
      <Link to="/about">
        <button>View place</button>
      </Link>
    </div>
  );
}