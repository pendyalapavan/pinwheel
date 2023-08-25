import React, { useState } from 'react';
import './Navbar.css';
import logos from './logo.svg'

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="navbar">
      <div className="company-name">
      <img src={logos}className="main-img" alt="logo" />
      </div>
      <div className={`nav-items ${sidebarActive ? 'active' : ''}`}>
        <div className="nav-item na">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Blog</div>
        <div className="nav-item">Features</div>
        <div className="nav-item">How it works</div>
        <div className="nav-item">Pages</div>
        <div className="nav-item">Contact</div>
      </div>
      <div className="search-container">
        
        <button className="search-button">Sign up</button>
      </div>
      <div className="toggle-button" onClick={toggleSidebar}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
