import './App.css';

import React from 'react';

import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import MyTimer from './components/Timer';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavLink to='/Admin'>Admin</NavLink>
        <NavLink to='/Register'>Register</NavLink>
        <NavLink to='/Login'>Login</NavLink>
        <NavLink to='/Timer'>Timer</NavLink>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Timer' component={MyTimer} />
        <MyTimer />
      </header>
    </div>
  );
}

export default App;
