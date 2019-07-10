import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="Navbar">
          <div className="navlinks">
            <Link
              className="links"
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              About
            </Link>
            <Link
              className="links"
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              Work
            </Link>
            <Link
              className="links"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              Contact
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
