import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeUser,
  faTrophy,
  faCity,
  faShield,
  faDiagramProject,
  faCircleDollarToSlot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const hamburgerEvent = () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("menu-active");
    navLinks.classList.toggle("menu-active__nav-links");
  });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-body">
        <div className="menu">
          <Link className="nav-brand" to="/">
            BASSO
          </Link>
          <ul className="nav-links" id="nav-links">
            <li>
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHomeUser} />
                &nbsp;Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/goals">
                <FontAwesomeIcon icon={faTrophy} />
                &nbsp;Goals
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/municipality">
                <FontAwesomeIcon icon={faCity} />
                &nbsp;Municipality
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/city-security">
                <FontAwesomeIcon icon={faShield} />
                &nbsp;City Security
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} />
                &nbsp;Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contribute">
                <FontAwesomeIcon icon={faCircleDollarToSlot} />
                &nbsp;Contribute
              </Link>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          className="hamburger"
          id="hamburger"
          icon={faBars}
          onClickCapture={() => hamburgerEvent()}
        />
      </div>
    </nav>
  );
};

export default Navbar;
