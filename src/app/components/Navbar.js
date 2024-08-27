'use client'
import React from 'react';

import './style.css'
function Navbar() {
  return (
    <nav className="custom-navbar" data-spy="affix" data-offset-top="20" >
      <div className="container">
        {/* <a className="logo" href="#home">Welcome</a> */}
        <img src="/imgs/shifayath.png" style={{width:"80px",height:"auto"}}/>
      </div>
    </nav>
  );
}

export default Navbar;
