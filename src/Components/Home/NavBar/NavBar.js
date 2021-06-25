import React from "react";
import { Link } from "react-router-dom";
import mainIcon from "../../../images/favicon-32x32.png";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: " rgb(31, 116, 117)" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={mainIcon} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link ms-5 active" aria-current="page">
                Home
              </Link>
              <Link to="/order" className="nav-link ms-5 active">
                Orders
              </Link>
              <Link to="/admin" className="nav-link ms-5 active">
                Dashboard
              </Link>
              {/* <Link to="/allOrder" className="nav-link ms-5 active">All order</Link> */}
              <Link to="/login" className="nav-link ms-5 active">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
