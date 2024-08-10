import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = ({ onToggleSidenav }) => {
  const [showSidenav, setShowSidenav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showErpDropdown, setShowErpDropdown] = useState(false);
  const toggleSidenav = () => {
    setShowSidenav(!showSidenav);
    if (onToggleSidenav) {
      onToggleSidenav(!showSidenav);
    }
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleErpDropdown = () => {
    setShowErpDropdown(!showErpDropdown);
  };

  return (
    <div className={`navbar-container ${showSidenav ? "shifted" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="btn btn-primary"
          type="button"
          onClick={toggleSidenav}
        >
          ☰
        </button>
        <div className={`sidenav ${showSidenav ? "active" : ""}`}>
          <button className="btn btn-close" onClick={toggleSidenav}>
            &times;
          </button>
          <ul className="sidenav-menu">
            <li>
              <Link to="/home" className="sidenav-link" onClick={toggleSidenav}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/content"
                className="sidenav-link"
                onClick={toggleSidenav}
              >
                Profile
              </Link>
            </li>
            <li className="dropdown">
              <button
                className="dropdown-toggle sidenav-link"
                onClick={toggleDropdown}
              >
                Settings
              </button>
              <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <li>
                  <button
                    className="dropdown-toggle sidenav-link"
                    onClick={toggleErpDropdown}
                  >
                    ERP Settings
                  </button>
                  <ul
                    className={`dropdown-menu ${showErpDropdown ? "show" : ""}`}
                  >
                    <li>
                      <Link
                        to="/erp-configuration"
                        className="sidenav-link"
                        onClick={toggleSidenav}
                      >
                        ERP Configuration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/master-home"
                        className="sidenav-link"
                        onClick={toggleSidenav}
                      >
                        Master and Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/item-master"
                        className="sidenav-link"
                        onClick={toggleSidenav}
                      >
                        Item Master
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/add-new-master"
                        className="sidenav-link"
                        onClick={toggleSidenav}
                      >
                        Add New Master
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/content"
                className="sidenav-link"
                onClick={toggleSidenav}
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="container">
          <h1>NavBar</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
