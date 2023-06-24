import React, { useState } from 'react';
import Card from "./card";
import "../Styles/Foodscroller.css";


export const Foodscroller = ({foodData}) => {

  const [food, setFood]=useState([]);
  const [query, setQuery]=useState('');
  
  const randomPlace = async() => {

    const alphabet = "1234567890abcdefghijklmnopqrstuvwxyz";
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    const offset = Math.floor(Math.random()) * 100

    try{
      const res = await fetch(`https://api.stb.gov.sg/content/food-beverages/v2/search?searchType=keyword&searchValues=${randomCharacter}&offset=${offset}&limit=10`,
      {
        method: "GET",
        headers : {
          'ApiEndPointTitle':'Search Food and Beverages By Keyword or UUIDs',
          'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      console.log(data.data);
      setFood(data.data);
      console.log(food);
    }
    catch(e){
      console.log(e);
    }

  }

  return (
    <ul>
        <button className='lucky' onClick={randomPlace}>Feeling lucky?</button>
        {food.map(locationData => {
          return (
          <li>
            <Card foo = {locationData}/>
          </li>
          );
        })}
    </ul>
  );
}
