import React, { useState } from "react";
import { Link as LinkPage } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener('scroll' , changeBackground);

  return (
    <>
      <nav className={nav? "nav active":"nav"}>

        <LinkPage to="/" className="logo" >
          <img src={logo}  alt="quraan castle"/>
        </LinkPage>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for ="menu-btn" >
          <span className="nav-icon"></span>
          </label> 
          <ul className="menu">
            <li>
                <LinkPage to="/" >Home</LinkPage>
            </li>
            <li>
                <LinkPage to="features" smooth={true} duration={1000}>Features</LinkPage>
            </li>            
            <li>
                <LinkPage to="about" smooth={true} duration={1000}>About</LinkPage>
            </li>
            <li>
                <LinkPage to="contact" smooth={true} duration={1000}>Contact</LinkPage>
            </li>
            <li>
                <LinkPage to="login" >Login</LinkPage>
            </li>
          </ul>
      </nav>
    </>
  );
}

export default Navbar;
