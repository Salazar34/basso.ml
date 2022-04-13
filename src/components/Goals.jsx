import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

const Goals = () => {
  return (
    <div className="goals-page">
      {/* Background Wrapper */}
      <div className="background-wrapper">
        {/* Navbar Section */}
        <Navbar />
        {/* End Navbar */}
        <div className="hero">
          <div className="hero__text">
            <h1>Transforming cities for a better future</h1>
            <p>
              The goal of our project is the improvement of the{" "}
              <b>Quality of Life (QOL)</b> and the conditions of our planet to
              ensure the best possible future for all future generations. For
              this reason, our goal is to build the best possible city by
              meeting all 17 global targets.
            </p>
            <button className="btn btn-hero">
              <Link className="btn-hero-link" to="/contribute">
                Contribute to the project
              </Link>
            </button>
          </div>
          <div className="hero__img">
            <img src="logo-vertical.png" alt="" className="hero-img" />
          </div>
        </div>
      </div>
      {/* End Background Wrapper */}

      <div className="goals__hero">
        <h1 className="goals__hero__title">Our Project's goals</h1>
        <p className="goals__hero__introduction">
          We aim to achieve a fully sustainable and modernized community,
          capable of living with modern conveniences while respecting the
          environment and our planet. Our goals aim to the creation of a future
          that can fully reflect the expectations and demands of the Global
          Goals and at the same time the citizens' needs.
        </p>
        <h3 className="goals__hero__quote">
          <em>"Our cards for reaching a better future"</em>
          <br />
          <span>- Sal Code</span>
        </h3>
      </div>
      {/* Goals Section */}
      <div className="goals">
        <div className="goals__card">
          <Card
            className="goals__card"
            title="Sustainability"
            img="sustainability.png"
            text="The aim of the project is to create a better World starting from the primary places where activities take place: cities. Creating more sustainable cities contributes to create a healthier planet."
          />
        </div>
        <div className="goals__card">
          <Card
            className="goals__card"
            title="Modernity"
            img="modernity.png"
            text="The key to achive sustainability is modernity. Creating modern infrastructures, automated systems and innovative services helps cities to create a more secure and flexible environment for citizens."
          />
        </div>
        <div className="goals__card">
          <Card
            className="goals__card"
            title="Sensibilization"
            img="sensibilization.png"
            text="We want to help people understand the real importance of having a clean world, by creating cultural events and festivals, in order to achive our goals in the best way with the collaboration of the community."
          />
        </div>
        <div className="goals__card">
          <Card
            className="goals__card"
            title="Collaboration"
            img="collaboration.png"
            text="The creation of strong communities within cities greatly facilitates the daily lives of citizens, as well as a fair distribution of voluntary public services."
          />
        </div>
      </div>
      {/* End Goals Section */}

      {/* Banner Section */}
      <div className="banner">
        <h1 className="banner-heading">Have some nice ideas?</h1>
        <p>
          We're here to help people saving the world, creating a better future
          for everyone. Our project is always open to suggestions, so if you
          have some nice ideas, you can actively contribute to the project.
        </p>
        <button className="btn btn-grad project-mission__pollution_consequences__text__button goals-banner__button">
          <Link className="btn-hero-link" to="/contribute">
            Let us know here
          </Link>
        </button>
      </div>
      {/* End Banner Section */}

      {/* Footer section */}
      <Footer />
      {/* End Footer*/}
    </div>
  );
};

export default Goals;
