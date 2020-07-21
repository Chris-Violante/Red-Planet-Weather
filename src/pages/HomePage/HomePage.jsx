import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
    render() {
        return (
            <>
                <div className='home col s12'>
                    <div className='card'>
                        <h4 className='card-title'>WELCOME TO RED PLANET WEATHER!</h4><br />
                        <Link className='card-title' to='/home'>CLICK HERE TO SEE HOW THE WEATHER ON MARS COMPARES TO WHERE YOU ARE!</Link>
                    </div>
                </div>
                <div className='home col s12'>
                    <div className='card'>
                        <h4 className='card-title'>HOW DO WE KNOW THE WEATHER ON MARS?</h4>
                        <p>NASA'S INSIGHT (SHORT FOR INTERIOR EXPORATION USING SEISMIC INVESTIGATIONS, GEODESY AND HEAT TRANSPORT) LANDER ARRIVED ON MARS ON THE 26TH OF NOVEMBER 2018.  INSIGHT IS DESIGNED AND FUNCTIONING AS A SCIENTIFIC PLATFORM FOR THE STUDY OF THE INTERIOR STRUCTURES AND ACTIVITY OF MARS, AND ALSO TELLS US THE WEATHER ON MARS AT ITS LOCATION.<br/>
                        INSIGHT IS LOCATED AT A FLAT, PLAINS LIKE AREA NEAR MARS' EQUATOR CALLED ELYSIUM PLANITIA. INSIGHT IS ABOUT 370MI FROM THE LOCATION THAT THE MARS CURIOSITY ROVER IS OPERATING. <br/>
                        INSIGHT'S MISSION IS PLANNED FOR 709 SOLS.  THIS APPLICATION TELLS YOU THE CURRENT SOL THE MISSION IS ON, AND THE WEATHER THAT INSIGHT REPORTS AT ELYSIUM PLANITIA FOR THE LAST 7 SOLS.
                        THE BACKGROUND PHOTO OF THIS APPLICATION IS A "SELFIE" TAKEN BY THE ACTUAL INSIGHT LANDER AT WORK.<br/>

                        </p>
                    </div>
                </div>
            </>
        )
    }
}


export default HomePage