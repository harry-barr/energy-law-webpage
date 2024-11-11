import React, { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="container">
      <FontAwesomeIcon icon={faScaleBalanced} className="logo" font-size="3rem" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="offers" smooth={true} offset={-225} duration={500}>
            What We Do
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-75} duration={500}>
            Who We Are
          </Link>
        </li>
        <li>
          <Link to="office" smooth={true} offset={-225} duration={500}>
            Office
          </Link>
        </li>
        <li>
          <Link to="clients" smooth={true} offset={-225} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-225}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="menuIcon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
