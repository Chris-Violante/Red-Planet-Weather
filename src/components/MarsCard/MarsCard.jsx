import React, { Component } from 'react';


class MarsCard extends Component {
    render () {
      return (
        <>
          {this.props.marsData.sol_keys ? this.props.marsData.sol_keys.reverse().map((key, idx) => {
            if (idx > 0) {
            return (
            <div className="col s4">
                <div className="card">
                    <span className="card-title">Sol {key}</span>
                      <ul>
                        <li>Temp: {Math.round(this.props.marsData[key].AT.av)}&deg;F</li>
                        <li>Wind Speed: {Math.round((this.props.marsData[key].HWS.av)*2.237)}MPH</li>
                      </ul>
                  </div>
                  </div>
            )
            } else {
                return (
                  <div className="col s12">
                  <div className="card">
                  <h4 className="season">Today:</h4>
                  <h5 className="season">Currently {this.props.marsData[key].Season} on Mars</h5>
                  <span className="card-title"> Sol {key}</span>
                    <ul>
                      <li>Temp {Math.round(this.props.marsData[key].AT.av)}&deg;F</li>
                      <li>Wind Speed: {Math.round((this.props.marsData[key].HWS.av)*2.237)}MPH</li> 
                    </ul>
                  </div>
                  </div>
            )
            }
        }) : null}                
        </>
      );
    }
  }
  
  export default MarsCard;