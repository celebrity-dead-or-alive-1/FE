import './App.css';

import React from 'react';

import Register from './components/Register';
<<<<<<< HEAD
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
=======
import { Route, NavLink } from 'react-router-dom'
import Admin from './components/Admin'
import Login from './components/Login';
import Timer from './components/Timer';
import LandingPage from './components/LandingPage';
import Score from './components/Score';
import { PrivateRoute } from './components/PrivateRoutes'
import AdminIndiv from './components/AdminIndiv'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/Admin'>Admin</NavLink>
        <NavLink to='/Register'>Register</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path ='/Admin' component ={Admin}/>
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Timer' component={Timer}/>
        <PrivateRoute  exact path='/Scores' component={Score}/>
        <Route path ='/Admin/AdminIndividual/:id' render={props => {
          return <AdminIndiv {...props}/> 
        }}
       />


>>>>>>> ee2d6f4cb469216421eda5040c728d0a67cd536e
      </header>
    </div>
  );
}

export default App;
