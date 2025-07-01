"use client";
import "./style.css";

function Navbar() {

  return (
    <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
      <div className="container">
        <img
          src="/imgs/shifayath.png"
          style={{ width: "80px", height: "auto" }}
          alt="Logo"
        />
      </div>
    </nav>
  );
}

export default Navbar;