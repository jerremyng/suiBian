// const Search = () => {
//     const [searchResults, setSearchResults] = useState([]);
//     const [query, setQuery] = useState('');
  
//     const handleInputChange = (event) => {
//       setQuery(event.target.value);
//     };
  
//     const handleSearch = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.stb.gov.sg/content/food-beverages/v2/search',
//           {
//             headers: {
//               'Authorization': 'nf84ZGMg8BiTEN0PDwGmV4AlVYdxYuvF',
//             },
//             params: {
//               q: query,
//             },
//           }
//         );
  
//         setSearchResults(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     return (
//       <div>
//         <input type="text" value={query} onChange={handleInputChange} />
//         <button onClick={handleSearch}>Search</button>
  
//         {searchResults.map((result) => (
//           <div key={result.id}>
//             <h3>{result.name}</h3>
//             <p>{result.description}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Search;