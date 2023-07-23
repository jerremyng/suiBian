import React, { Component } from 'react';

export default class Banner extends Component {

  constructor (props) {
    super(props);
    this.state = {
        geoLocation : {},
        geoError: null,
        searchResults: [],
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
    render() {
      if (this.state.geoError) {
        return <p className="banner warn">{this.state.geoError.message}</p>;
      } else if (this.state.geoLocation.latitude) {
        return (
          <p className="banner success">
            Lat: <strong>{this.state.geoLocation.latitude.toFixed(4)}</strong>, 
            Long: <strong>{this.state.geoLocation.longitude.toFixed(4)}</strong>
          </p>
        );
      } else {
        return null;
      }
    }
  }