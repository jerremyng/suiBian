import React, { Component } from 'react';
import Card from "../components/card";
import "../Styles/Foodscroller.css";


export default class LocationButton extends Component {

    constructor (props) {
        super(props);
        this.state = {
            geoLocation : {},
            geoError: null,
            searchResults: [],
            food: [],
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((e) => {
            this.setState({
                geoLocation: e.coords
            });
        }, async(err) => {
            this.setState({
                geoError: err
            });
        });
    }
    
    async randomPlace() {
        try{
        const res = await fetch(`https://api.stb.gov.sg/services/navigation/v2/search?location=${this.state.geoLocation.latitude.toFixed(4)}%2C%20${this.state.geoLocation.longitude.toFixed(4)}&dataset=food_beverages`,
        {
          method: "GET",
          headers : {
            'ApiEndPointTitle':'Search Map By Multiple Datasets',
            'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
            'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      console.log(data.data);
      this.setState({
        food: data.data // Update the state with the fetched data
      });      
      console.log(this.state.food);
      console.log(this.state.food.length);
    }
    catch(e){
      console.log(e);
    }

  }

    render() {
            return (<ul>
                        <button className='lucky' onClick={() =>this.randomPlace()}>
                            Generate by location
                        </button>
                        {this.state.food ? (this.state.food.length > 0 ? this.state.food.map(
                            locationData => {
                                return (
                                <li>
                                  <Card foo = {locationData}/>
                                </li>
                                );
                              }
                        ) :  <h1>No results found</h1>) : <h1>Click the button to generate!</h1>}
                    </ul>
            );
                    
    }
}
