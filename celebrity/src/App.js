import './App.css';

import React, {useEffect, useState} from 'react';
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
import CelebrityList from './components/CreateCeleb';

function App() {
  const [celebList, setCelebList] = useState([])

 useEffect(() => {
   axios.get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
   .then(res => {
     setCelebList(res.data)
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
        <Route exact path='/Admin' celebList={celebList} updateCelebList={setCelebList} component={Admin} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Game' component={Game} />
        <Route path= '/Celebs' component={CelebrityList} />

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
