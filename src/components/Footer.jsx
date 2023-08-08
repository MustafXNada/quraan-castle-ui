import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-scroll";
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer" id="footer">

      <div className="footer-container">
        <div className="a-widget">
          <Link to="/" className="logo" >
            <img src={Logo} alt="quraan castle" />
          </Link>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="a-widget">

          <div className="a-widgt-text">
            <h2>Pages</h2>
            <ul>
              <li>About</li>
              <li>Plans</li>
              <li>Contact</li>
              <li>Events</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="a-widget">
          <div className="a-widgt-text">
            <h2>Contact</h2>
            <ul>
              <li>Phone</li>
              <li>Fax</li>
              <li>Address</li>
            </ul>
          </div>
        </div>
      </div>

        <div>
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by Mustafa Nada
            </p>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;
