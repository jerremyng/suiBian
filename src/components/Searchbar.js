import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "../Styles/Searchbar.css";
import FoodLocation from '../components/FoodLocation.js';

export const Searchbar = () => {
  const [food, setFood]=useState([]);
  const [query, setQuery]=useState('');

  useEffect( () => {
    var authParameters = {
      method: "GET",
      headers : {
        'ApiEndPointTitle':
                        'Search Food and Beverages By Keyword or UUIDs',
        'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
        'Content-Type': 'application/json'
      }
    }
    fetch("https://api.stb.gov.sg/content/food-beverages/v2/search",authParameters)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setFood(data.data);
    })}, [])


const search = async(e)=> {
  e.preventDefault();
    console.log("Searching");
    try{
      const res= await fetch(`https://api.stb.gov.sg/content/food-beverages/v2/search?searchType=keyword&searchValues=${query}`,{
        method: "GET",
        headers : {
          'ApiEndPointTitle':
                          'Search Food and Beverages By Keyword or UUIDs',
          'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
          'Content-Type': 'application/json'
        }
      });
      const data= await res.json();
      console.log(data);
      
      console.log(data.data);
      setFood(data.data);
      console.log(food);
    }
    catch(e){
      console.log(e);
    }
  }
  
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <><div>
      <form className="d-flex" onSubmit={search} autoComplete="off">
        <input
          type="search"
          placeholder="Movie Search"
          className="me-2"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler} />
        <button variant="secondary" type="submit">
          Search
        </button>
      </form>
    </div>
    <div>
      {/* {food > 0 ?(
        <div className="container">
          <div className="grid">
            {food.map((foodLocation, key) => {
              return (
                  <FoodLocation
                      key={key}
                      image={foodLocation.thumbnails}
                      name={foodLocation.name}
                      location={foodLocation.address}/>
                    )
              })}
          </div>
        </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )} */}
    </div> 
    </>
  );
}
