import './App.css';

import React from 'react';

import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';
import Admin from './components/Admin';
import Game from './components/Game';
import Login from './components/Login';
import MyTimer from './components/Timer';
import LandingPage from './components/LandingPage';
import Score from './components/Score';
import { PrivateRoute } from './components/PrivateRoutes';
import AdminIndiv from './components/AdminIndiv';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Game' component={Game} />

        <PrivateRoute exact path='/Scores' component={Score} />
        <Route
          path='/Admin/AdminIndividual/:id'
          render={props => {
            return <AdminIndiv {...props} />;
          }}
        />
      </header>
    </div>
  );
}

export default App;
