import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <Link to="/">
          <img src="logo-cloud.png" alt="Logotipo da Escola" />
        </Link>
      </div>
      <div className="Navbar-links">
        <Link to="/practitioner" className="Navbar-link">
          Practitioner
        </Link>
        <Link to="/solutions-architect" className="Navbar-link">
          Solutions Architect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
