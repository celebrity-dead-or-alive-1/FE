//NavBar for App.js Login/Register and Admin
import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const NavBar = (props) => {

    const handleLogout = () = {
        localStorage.removeItem("token"),
        localStorage.removeItem("user_id"),
        props.history.push("/");
    }
    return (
        <div className="nav cont">
            {localStorage.getItem("token") ? (
            <nav className="navbar">
               <button><Link to="/">Home</Link></button>
               <button onClick={handleLogout}> <Link to="/">Logout</Link></button>
            </nav>
        ) : (
            <nav className="navbar">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/register">Register</Link></button>
                <button><Link to="/login">Login</Link></button>
                
               
            </nav>
        )}
        </div>
    );
}

export default NavBar;