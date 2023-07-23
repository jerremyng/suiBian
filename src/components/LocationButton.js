import React, { Component } from 'react';
import Card from "../components/card";
import "../Styles/LocationButton.css";


export default class LocationButton extends Component {

    constructor (props) {
        super(props);
        this.state = {
            geoLocation : {},
            geoError: null,
            searchResults: [],
            food: [],
            click: false,
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
        food: data.data,
        click: true// Update the state with the fetched data
      });      
      console.log(this.state.food);
      console.log(this.state.food.length);
    }
    catch(e){
      console.log(e);
    }
  }


    render() {
            return (<><button className='location-button' onClick={() => this.randomPlace()}>
                        Generate by location
                    </button>
                    <ul>                
                      {(this.state.food && this.state.click) ? (this.state.food.length > 0 ? this.state.food.map(
                      locationData => {
                      return (
                        <li>
                          <Card foo={locationData} />
                        </li>
                      );
                    }
                  ) : <p className='none'>No results found</p>) : <p className='none'>Click the button to generate!</p>}
              </ul></>
            );
                    
    }
}
