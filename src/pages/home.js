import FoodLocation from '../components/FoodLocation.js';
import SearchBar from '../components/Searchbar.js';
import { trialdata } from '../data/trialdata.js';
import { fireBaseAuth } from '../firebase.js';

export default function Home() {

    var user = fireBaseAuth.currentUser;

    return (
        <div className='homepage'>
            <div className='tophalf'>
                <br></br>
                { user == null ? <br></br>: <h3>Welcome back {user.name}</h3>}
                <h2>let randomness be your gudie</h2>
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