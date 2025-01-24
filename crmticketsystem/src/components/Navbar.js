import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="home-page">
        <nav className="navbar">
            <div className="navbar-logo">
                <PiAirplaneTakeoffFill />
                <h2>SKY-JETTERS</h2>
            </div>
            <div className="navbar-links">
                <Link to="/book" className="nav-link">Book</Link>
                <Link to="/check-in" className="nav-link">Check-In</Link>
                <Link to="/my-trips" className="nav-link">My Trips</Link>
                <Link to="/flight-status" className="nav-link">Flight Status</Link>
            </div>
            <div className="navbar-actions">
                <button className="btn btn-signup">
                    <Link to="/sign-up" className="btn-link">Sign-Up</Link>
                </button>
                <button className="btn btn-login">
                    <Link to="/login-in" className="btn-link">Login-In</Link>
                </button>
                <div className="icon-container">
                    <FaBell className="icon" title="Notifications" />
                    <FaSearch className="icon" title="Search" />
                </div>
            </div>
        </nav>
        <div className="content">
            <div>
            <h1>Soaring Beyond the Ordinary</h1>
            <h1>Where Every Flight is an Adventure in the Clouds</h1>
            </div>
        </div>
    </div>
    
  );
};

export default Navbar;
