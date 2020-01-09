import './App.css';

import React, {useEffect} from 'react';
import axios from 'axios';
import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';
import Admin from './components/Admin';
import Admin2 from './components/Admin2';
import Admin2Login from './components/Admin2Login';
import Game from './components/Game';
import Login from './components/Login';

import LandingPage from './components/LandingPage';
import Score from './components/Score';
import { PrivateRoute } from './components/PrivateRoutes';
import AdminIndiv from './components/AdminIndiv';
import NavBar from './components/NavBar';

function App() {

 useEffect(() => {
   axios.get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
   .then(res => {
     console.log(res)
   })
   .catch(error => {
     console.log(error)
   })
 },[])
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Admin2' component={Admin2} />
        <Route exact path='/Admin2Login' component={Admin2Login} />
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
