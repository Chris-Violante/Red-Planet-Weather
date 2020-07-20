import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
    render() {
        return (
            <>
                <div className='col s12'>
                    <div className='card'>
                        <h4 className='card-title'>WELCOME TO RED PLANET WEATHER</h4><br />
                        <h5>A PLACE WHERE YOU CAN COMPARE YOUR WEATHER TO THE WEATHER ON MARS!</h5>
                        <Link to='/home'>Click Here to See the Weather</Link>
                    </div>
                </div>
            </>
        )
    }
}


export default HomePage