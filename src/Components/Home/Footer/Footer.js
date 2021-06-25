import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-clean">
      <footer>
        <div className="container d-flex p-2 ">
          <div className="justify-content-center col-md-6 ">
            <div className="mt-5 pt-5">
              <h5>This Project is Under Construction</h5>
              <h5>Company Provider</h5>
              <br />
              <h4>web.ProgrammingHero@gmail.com</h4>
            </div>
          </div>
          <div className="row justify-content-center col-md-6 ">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Online System & Setting</a>
                </li>
                <li>
                  <a href="#">Computer System & Service</a>
                </li>
                <li>
                  <a href="#">Mobile System & Service</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Best Team</a>
                </li>
                <li>
                  <a href="#">Best Service</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#">Work Place</a>
                </li>
                <li>
                  <a href="#">Online Place</a>
                </li>
                <li>
                  <a href="#">Best Benefits</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
