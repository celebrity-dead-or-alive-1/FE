import './App.css';

import React from 'react';

import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom'
import Admin from './components/Admin'
import Login from './components/Login';
import Timer from './components/Timer';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/Admin'>Admin</NavLink>
        <NavLink to='/Register'>Register</NavLink>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path ='/Admin' component ={Admin}/>
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Timer' component={Timer}/>



      </header>
    </div>
  );
}

export default App;
