import React, { Component } from 'react';


class LocalCard extends Component {
    render () {
      return (
        <>
              <div className="col s12">
                <div className="card">
                    <h4>Weather at Your Location</h4>
                    <h5>Currently: {this.props.dscrp}</h5>
                    <h5>Temperature: {this.props.temp}&deg;F</h5>
                    <h5>Wind Speed: {this.props.wind}mph</h5>
                    {this.props.icon && 
                    <img
                    src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
                    alt='Current Conditions'
                    />
                    }
                  </div>
              </div>
        </>
      );
    }
  }
  
  export default LocalCard;