import React from "react";
import "./Navbarstyle.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="./HomePage">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./AboutPage">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./ContactPage">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
