import '../Styles/card.css';
import React from 'react';
import smol from '../assets/smol.png';
import { Link } from 'react-router-dom';

export default function Card({foo}) {
  return (
      <div className="foodLocation">
        {/* <div style={{ backgroundImage: smol }}> </div> */}
        <h3> {foo["name"]} </h3>
        <h3 className="med"> {foo["address"]["buildingName"]} </h3>
        <Link to="/about">
          <button>Find out more</button>
        </Link>
      </div>
  );
}
