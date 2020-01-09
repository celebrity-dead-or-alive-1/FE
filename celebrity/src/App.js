import './App.css';

import React, {useEffect} from 'react';
import axios from 'axios'
import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';
import Admin from './components/Admin';
import Game from './components/Game';
import Login from './components/Login';

import LandingPage from './components/LandingPage';
import Score from './components/Score';
import { PrivateRoute } from './components/PrivateRoutes';
import AdminIndiv from './components/AdminIndiv';
import NavBar from './components/NavBar';
import UserScore from './components/UserScore'
import AdminAlt from './components/AdminAlt'
import AdminIndivAlt from './components/AdminIndAlt'

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
        <Route exact path ='/AdminAlt' component={AdminAlt}/> 
        <PrivateRoute exact path='/Scores' component={Score} />
        <PrivateRoute exact path='/User' component={UserScore}/> 
        <Route
          path='/Admin/AdminIndividual/:id'
          render={props => {
            return <AdminIndiv {...props} />;
          }}
        />
        <Route
          path='/AdminAlt/AdminIndividualAlt/:id'
          render={props => {
            return <AdminIndivAlt {...props} />;
          }}
        />
      </header>
    </div>
  );
}

export default App;
