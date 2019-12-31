import './App.css';

import React from 'react';
import Login from './components/Login';
import Timer from './components/Timer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>HELLO CELEBRITY!!</h1>
        <Route exact path='/Login' />
        <Route exact path='/Timer' />
      </header>
    </div>
  );
}

export default App;
