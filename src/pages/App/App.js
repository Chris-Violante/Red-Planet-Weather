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
    user: userService.getUser,
    lat: null,
    lng: null,
    temp: null,
    wind: null,
    dscrp: null,
    icon: '',
    insight: {}
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
    console.log(marsData)
    this.setState({
      lat: lat, 
      lng: lng, 
      temp: Math.round(weatherData.main.temp), 
      icon: weatherData.weather[0].icon,
      wind: weatherData.wind.speed,
      dscrp: weatherData.weather[0].description
    })
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
              <MarsCard />
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
