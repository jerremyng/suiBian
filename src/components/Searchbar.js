import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";
import "../Styles/Searchbar.css";

export const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (query) => {
    fetch("https://api.stb.gov.sg/content/food-beverages/v2/search?searchType=keyword&searchValues=${query}",{
      method: "GET",
      headers : {
        'ApiEndPointTitle':
                        'Search Food and Beverages By Keyword or UUIDs',
        'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      });

      
      // .then((json) => {
      //   const results = json.filter((user) => {
      //     return (
      //       value &&
      //       user &&
      //       user.name &&
      //       user.name.toLowerCase().includes(value)
      //     );
      //   });
      //   setResults(results);
      //});
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const apiKey = 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE';

//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       const url = `https://api.stb.gov.sg/content/food-beverages/v2/search?q=${encodeURIComponent(query)}`;
//       const response = fetch(url, {
//         method: 'GET',
//         headers: {
//           'X-API-Key': apiKey,
//           // 'Content-Language': 'en',
//           // 'Content-Type': 'application/json'
//         }.console.log()
//       });m

//       if (!response.ok) {
//         throw new Error('Failed to fetch search results.');
//       }

//       const data = await response.json();
//       setSearchResults(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search..."
//         />
//         <button type="submit">Search</button>
//       </form>

//       {searchResults.length > 0 && (
//         <div>
//           <h2>Search Results:</h2>
//           <ul>
//             {searchResults.map((result) => (
//               <li key={result.id}>{result.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


// export default function Searchbar() {
//  const [searchInput, setSearchInput] = useState("");

// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

// // if (searchInput.length > 0) {
// //     countries.filter((country) => {
// //     if (country.name === searchInput) {
// //     return country.name};
// // });
// // }

// return (
//     <div className="search-container">
//       <input
//       className='search-input'
//       type="search"
//       placeholder="search here..."
//       onChange={handleChange}
//       value={searchInput} />
//       <a href="/" className="search-btn">
   
//       </a>
//       <div id="list"></div>
//     <div>{searchInput}</div>
//     </div>
  
// )

// }