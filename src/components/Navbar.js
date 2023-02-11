import React from "react";
import { Link } from "react-router-dom";
// import Header from './Header'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
