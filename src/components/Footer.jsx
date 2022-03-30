import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container__links">
          <div className="single-list">
            <p>Website content</p>
            <ul className="footer__container__links__list">
              <li>
                <Link className="footer-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/goals">
                  Goals
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/municipality">
                  Municipality
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/city-security">
                  City Security
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/contribute">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
          <div className="single-list">
            <p>Usefull links</p>
            <ul className="footer__container__links__list">
              <li>
                <a
                  className="footer-link"
                  href="https://github.com/Salazar34/basso.ml"
                >
                  Repository
                </a>
              </li>
              <li>
                <a className="footer-link" href="mailto:support@basso.ml">
                  Contact us
                </a>
              </li>
              <li>
                <a className="footer-link" href="/credits">
                  Credits
                </a>
              </li>
            </ul>
          </div>
          <div className="single-list">
            <p>Support</p>
            <ul className="footer__container__links__list">
              <li>
                <a className="footer-link" href="/get-in-touch">
                  Get in touch
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Report a bug
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://discord.gg/uxHQR2fNTW">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__container__bottom">
          <p>
            The following website content has been distributed under{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY-NC-SA 4.0
            </a>
          </p>
          <p>
            The website source code has been released under{" "}
            <a href="">MIT License</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
