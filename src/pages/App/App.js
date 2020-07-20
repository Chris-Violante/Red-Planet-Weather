import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MarsCard from '../../components/MarsCard/MarsCard';
import LocalCard from '../../components/LocalCard/LocalCard'
import { getCurrentLatLng } from '../Services/geolocation'
import { getCurWeatherByLatLng } from '../Services/weather-api'
import { getAll } from '../Services/mars-api';





class App extends Component {
  state= {
    user: userService.getUser(),
    lat: null,
    lng: null,
    temp: null,
    wind: null,
    dscrp: null,
    icon: '',
    sol_keys: [],
    marsSeason: null,
    marsTemp0: null,
    marsTemp1: null,
    marsTemp2: null,
    marsTemp3: null,
    marsTemp4: null,
    marsTemp5: null,
    marsTemp6: null,
    marsData: {}
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }, () => this.props.history.push('/'));
  }
  
  handleSignupOrLogin = () => {
    this.setState({
        user: userService.getUser()
    })
  }

  async componentDidMount() {
    const { lat, lng } = await getCurrentLatLng()
    const weatherData = await getCurWeatherByLatLng(lat, lng)
    const marsData = await getAll()
    const solKeys = marsData.data.sol_keys
    this.setState({
      lat: lat, 
      lng: lng, 
      temp: Math.round(weatherData.main.temp), 
      icon: weatherData.weather[0].icon,
      wind: weatherData.wind.speed,
      dscrp: weatherData.weather[0].description,
      sol_keys: solKeys,
      marsSeason: marsData.data[solKeys[6]].Season,
      marsTemp0: marsData.data[solKeys[6]].AT.av,
      marsTemp1: marsData.data[solKeys[5]].AT.av,
      marsTemp2: marsData.data[solKeys[4]].AT.av,
      marsTemp3: marsData.data[solKeys[3]].AT.av,
      marsTemp4: marsData.data[solKeys[2]].AT.av,
      marsTemp5: marsData.data[solKeys[1]].AT.av,
      marsTemp6: marsData.data[solKeys[0]].AT.av,
      marsData: marsData.data
    })
    console.log('this is mars data', marsData)
    console.log(this.state.marsSeason)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          Red Planet Weather
          <nav>
              {userService.getUser() ?
                  <>
                      {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
                      &nbsp;&nbsp;&nbsp;
                      <NavLink exact to='/logout' onClick={this.handleLogout}>LOGOUT</NavLink>
                      &nbsp;&nbsp;&nbsp;
                  </>
              :
                  <>
                      <NavLink exact to='/signup'>SIGNUP</NavLink>
                      &nbsp;&nbsp;&nbsp;
                      <NavLink exact to='/login'>LOGIN</NavLink>
                      &nbsp;&nbsp;&nbsp;
                  </>
              }
          </nav>
        </header>
        <main>
          <Switch>
          <Route exact path='/signup' render={({ history }) =>
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          } />
          <Route exact path='/login' render={({ history }) =>
              <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          } />
          <Route exact path='/home' render={({ history }) =>
              <div className='row'>
              <LocalCard 
              temp={this.state.temp} 
              icon={this.state.icon}
              wind={this.state.wind}
              dscrp={this.state.dscrp}
               />
              <MarsCard 
              sol_keys={this.state.sol_keys}
              marsTemp0={this.state.marsTemp0}
              marsTemp1={this.state.marsTemp1}
              marsTemp2={this.state.marsTemp2}
              marsTemp3={this.state.marsTemp3}
              marsTemp4={this.state.marsTemp4}
              marsTemp5={this.state.marsTemp5}
              marsTemp6={this.state.marsTemp6}
              marsSeason={this.state.marsSeason}
              marsData={this.state.marsData}
               />
            </div>
          } />
          </Switch>
          <div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
