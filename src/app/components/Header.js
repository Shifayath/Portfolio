'use client'
import React from 'react';
import './style.css'
function Header() {
  return (
    <header id="home" className="header" >
      <div className="overlay" ></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up" >Hello World!</span>
          <span className="down" >I am Shifayath Khan</span>
        </h1>
        <div className="header-subtitle" >I'm a <div><span>React Developer</span></div>
          </div>
        <button className="btn btn-primary" >Scroll to View More</button>
      </div>
    </header>
  );
}

export default Header;
