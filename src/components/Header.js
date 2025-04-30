import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Wharton Logo" className="logo" />
      </div>
      <h1 className="header-title">PRD Producer</h1>
      <div className="header-subtitle">Wharton AI Executive Education</div>
    </header>
  );
};

export default Header; 