import './App.css';

import React, {useEffect} from 'react';
import axios from 'axios'
import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import MyTimer from './components/Timer';
import LandingPage from './components/LandingPage';
import Score from './components/Score';
import { PrivateRoute } from './components/PrivateRoutes';
import AdminIndiv from './components/AdminIndiv';
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
        <NavLink to='/Admin'>Admin</NavLink>
        <NavLink to='/Register'>Register</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Login' component={Login} />

        <PrivateRoute exact path='/Scores' component={Score} />
        <Route
          path='/Admin/AdminIndividual/:id'
          render={props => {
            return <AdminIndiv {...props} />;
          }}
        />
        <MyTimer />
      </header>
    </div>
  );
}

export default App;
