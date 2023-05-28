import React, {useState} from 'react';
import "../Styles/Searchbar.css";
import { FaGenderless } from "react-icons/fa";

export default function Searchbar() {
 const [searchInput, setSearchInput] = useState("");

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

// if (searchInput.length > 0) {
//     countries.filter((country) => {
//     if (country.name === searchInput) {
//     return country.name};
// });
// }

return (
    <div className="search-container">
      <input
      className='search-input'
      type="search"
      placeholder="search here..."
      onChange={handleChange}
      value={searchInput} />
      <a href="/" className="search-btn">
   
      </a>
      <div id="list"></div>
    <div>{searchInput}</div>
    </div>
  
)

}