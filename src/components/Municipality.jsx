import React from "react";

import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Municipality = () => {
  return (
    <div className="municipality">
      {/* Background Wrapper */}
      <div className="background-wrapper">
        {/* Navbar section */}
        <Navbar />
        {/* End Navbar section */}
        <div className="hero">
          <div className="hero__text">
            <h1>Municipal administrations of the future</h1>
            <p>
              Bureaucracy and public administration: two words, two big
              problems. Today’s municipal systems present serious problems that
              cause a general slowdown of the public system, generating
              discontent within the population as well as continues delays and
              errors due to haste.
            </p>
            <button className="btn btn-hero">
              <Link className="btn-hero-link" to="/goals">
                Our City Security Policy
              </Link>
            </button>
          </div>
          <div className="hero__img">
            <img src="town-hall.png" alt="" className="hero-img" width="" />
          </div>
        </div>
      </div>
      {/* End Background Wrapper */}
      <Footer />
    </div>
  );
};

export default Municipality;
