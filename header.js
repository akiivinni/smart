import React from 'react';
import usericon from '../../src/images/usericon.png';
import logo from '../images/logoacc.png';
import '../styles/header.css';
import loginicon from '../images/loginicon.png';
import Modal from './Admin';

const Header = () => {
  return (
    
<>
    <header className="navbar">
      <div className="left-side">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <span className="space">|</span>
        <span className="nav-text">Smart Alumni Officials</span>
      </div>

      <div className="right-side">
        <a href="/profile" className="icon-link">
          <img src={usericon} alt="usericon" className="user-icon" />
        </a>
        <a href="/login" className="icon-link">
          <img src={loginicon} alt="loginicon" className="login-icon" />
        </a>
      </div>

    </header>

<div className='nav-bg'>
  </div>
 
</>
  );
}

export default Header;
