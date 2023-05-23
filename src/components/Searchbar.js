import React, {useState} from 'react';
import "../Styles/Searchbar.css";

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
<div>
    <input
    className='search-box'
    type="search"
    placeholder="type here..."
    onChange={handleChange}
    value={searchInput} />
    <div id="list"></div>


    <div>{searchInput}</div>

</div>)

}