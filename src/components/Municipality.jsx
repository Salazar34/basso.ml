import React from "react";

import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";

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
              Burocracy and public administration: two words, two big problems.
              Today’s municipal systems present serious problems that cause a
              general slowdown of the public system, generating discontent
              within the population as well as continues delays and errors due
              to haste.
            </p>
            <button className="btn btn-hero">
              <Link className="btn-hero-link" to="/city-security">
                Our City Security Policy
              </Link>
            </button>
          </div>
          <div className="hero__img">
            <img src="town-hall.png" alt="" className="hero-img" />
          </div>
        </div>
      </div>
      {/* End Background Wrapper */}

      {/* Municipality Cards */}
      <div className="goals municipality-cards">
        <div className="goals__card">
          <Card
            className="goals__card"
            title="Innovative Learning"
            img="brain.png"
            text="Our city is going to offer a learning system to make everyone learn about technologies and new innovation. The mind of a man is the most precious part of him so making it grow is in our interest."
          />
        </div>
        <div className="goals__card">
          <Card
            className="goals__card"
            title="Digitalization"
            img="virtual (1).png"
            text="Burocracy is so annoying, so we tought about how to semplify it. The Answer is... DIGITALIZATION! We are thinking about a new way to manage public systems without burocracy and with sustainable methods. "
          />
        </div>
      </div>
      <div className="goals__card municipality-card-3">
        <Card
          className="goals__card"
          title="Improved Infrastructures"
          img="bridge (1).png"
          text="To make our city better, our city is going to invest in infrastructures to let cityzens live their life much better. Submarine subway stations, high speed magnetic trains and 'smart' sidewalks. Better 'bridges' makes better people."
        />
      </div>
      {/* End Municipality Cards */}

      <Footer />
    </div>
  );
};

export default Municipality;
