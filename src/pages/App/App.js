import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';




class App extends Component {
  state= {
    user: userService.getUser
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
      </div>
    );
  }
}

export default App;
