import FoodLocation from '../components/FoodLocation.js';
import SearchBar from '../components/Searchbar.js';
import { trialdata } from '../data/trialdata.js';

export default function Home() {

    return (
        <div className='homepage'>
            <div className='tophalf'>
                <br></br>
                <br></br>
                <h2>let randomness be your guide</h2>
                <SearchBar/>
                <br/>
                <p>or</p>
                <button>i'm feeling lucky</button>
            </div>
            <div className='locationList'>
                {trialdata.map((foodLocation, key) => {
                    return (
                        <FoodLocation
                            key={key}
                            image={foodLocation.image}
                            name={foodLocation.name}
                            location={foodLocation.location}
                        />
                    );
                })}
            </div>
        </div> 
    );
}