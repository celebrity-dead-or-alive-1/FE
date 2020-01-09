//NavBar for App.js Login/Register and Admin
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = props => {
  return (
    <div className='nav cont'>
      <nav className='navbar'>
        <Link to='/'>Home </Link>
        <Link to='/register'>Register </Link>
        <Link to='/login'>Login </Link>
        {/* <Link to='/Game'>Game</Link> */}
      </nav>
    </div>
  );
};

export default NavBar;
