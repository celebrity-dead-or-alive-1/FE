//NavBar for App.js Login/Register and Admin
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = props => {
  return (
    <div className='nav cont'>
      <nav className='navbar'>
        <Link className="nav-link" to='/'>Home </Link>
        <Link className="nav-link" to='/register'>Register </Link>
        <Link className="nav-link" to='/login'>Login </Link>
        <Link className="nav-link" to='/Game'>Game</Link>
        {/* <Link className="nav-link" to='/Admin2Login'>Admin2 Login</Link> */}
      </nav>
    </div>
  );
};

export default NavBar;
