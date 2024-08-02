import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        {/* Navbar Starts */}
        <div className="navbar">
          {/* Nav Logo */}
          <div className="nav-logo">
            <i class="fas fa-th-large"></i>
            <h2>
              Alex <span className="special">Okor</span>
            </h2>
          </div>
          {/* Nav Logo Ends */}

          {/* Nav Links */}
          <div className="nav-links">
            <ul>
              <li className="active">
                <a href="#">
                  <span>
                    <i class="fas fa-laptop-house"></i>
                  </span>{" "}
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  About
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i class="fas fa-layer-group"></i>
                  </span>{" "}
                  Services
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i class="fas fa-briefcase"></i>
                  </span>{" "}
                  Works
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i class="fas fa-inbox"></i>
                  </span>{" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Nav Links Ends */}

          {/* Moon icon */}
          <div className="moon-icon">
            <i class="fas fa-moon"></i>
          </div>
          {/* Moon icon Ends */}

          {/* Let's Talk Button */}
          <div className="lets-talk-btn">
            <a href="#">
              Let's Talk{" "}
              <span>
                <i class="fas fa-headset"></i>
              </span>
            </a>
          </div>
          {/* Let's Talk Button Ends */}

          {/* Menu icon */}
          <div className="menu-icon">
            <i class="fas fa-bars"></i>
          </div>
          {/* Menu Icon ends */}
        </div>
        {/* Navbar Ends */}
      </header>
    </>
  );
};

export default Navbar;
