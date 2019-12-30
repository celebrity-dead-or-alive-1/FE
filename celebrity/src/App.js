import './App.css';

import React from 'react';
import Login from './components/Login';
import Timer from './components/Timer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>HELLO CELEBRITY!!</h1>
        <Timer></Timer>
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
