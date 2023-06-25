import React, { useEffect, useState } from 'react';
import "../Styles/Searchbar.css";
import Card from "../components/card";

export const Searchbar = () => {
  const [food, setFood]=useState([]);
  const [query, setQuery]=useState('');
  
  const changeHandler = e => {
    setQuery(e.target.value);
  }

  // function for search by string
  const search = async(e) => {
    e.preventDefault();
      console.log("Searching");
      try{
        const res = await fetch(`https://api.stb.gov.sg/content/food-beverages/v2/search?searchType=keyword&searchValues=${query}&limit=50`,
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

  // function for search by random
  const randomPlace = async() => {

    const alphabet = "1234567890abcdefghijklmnopqrstuvwxyz";
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    const offset = Math.floor(Math.random()) * 100

    try{
      const res = await fetch(`https://api.stb.gov.sg/content/food-beverages/v2/search?searchType=keyword&searchValues=${randomCharacter}&offset=${offset}&limit=6`,
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
    <>
    
    <div id="search">
      <div>
      <form className="d-flex" onSubmit={search} autoComplete="off">
        <input
          type="search"
          placeholder = "Find a place"
          className="me-2"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler} />
        <button 
          className='search-button' 
          variant="secondary" 
          type="submit">
          Search
        </button>
      </form>
      <button className='lucky' onClick={randomPlace}>Feeling lucky?</button>
      </div>
      <div id="tags-box">
        <label>Family
            <input type="checkbox" />
        </label>

        <label>Couple
            <input type="checkbox" />
        </label>
        <label>Japanese
            <input type="checkbox" />
        </label>
        <label>Brunch
            <input type="checkbox" />
        </label>
        <label>Mexican
            <input type="checkbox" />
        </label>
      </div>
    </div>

    <div className='locationList'>
      {food.map(locationData => {
        return <Card foo = {locationData}/>;
      })}
    </div> 

    </>
  );
}
