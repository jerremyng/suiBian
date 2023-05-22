import React, {useState} from 'react'

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
    type="search"
    placeholder="type here..."
    onChange={handleChange}
    value={searchInput} />
    <div id="list"></div>


    <div>{searchInput}</div>

</div>)

}