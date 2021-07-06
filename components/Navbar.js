import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../components/pages/new2.png";

function Navbar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Link to="/" onClick={closeMobileMenu}>
              <img className="navbar-logo" src={logo} alt="logo"></img>
              {/* <i class="fab fa-typo3" /> */}
            </Link>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Startseite
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}>
                Wieso du uns lieben wirst!
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}>
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}>
                Sei dein eigener Chef/in!
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/allergene"
                className="nav-links"
                onClick={closeMobileMenu}>
                Allergene
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/bewerten"
                className="nav-links"
                onClick={closeMobileMenu}>
                Bewerte uns
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kontact"
                className="nav-links"
                onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/impressum"
                className="nav-links"
                onClick={closeMobileMenu}>
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
