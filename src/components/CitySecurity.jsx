import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";

const CitySecurity = () => {
  return (
    <div className="city-security">
      <div className="background-wrapper">
        <Navbar />
        <div className="hero">
          <div className="hero__text">
            <h1>Making your world the safest place to live in.</h1>
            <p>
              The security of our city is founded on the common sense of the
              citizens, even though there will be a surveillance corp always
              supervising the city.
            </p>
          </div>
          <div className="hero__img cs__img">
            <img
              src="city.png"
              width="250"
              alt="city-security"
              className="hero__img"
            />
          </div>
        </div>
      </div>
      <h1 className="cs-pre-header">The Security Policy we offer</h1>
      <div className="row">
        <div className="row__card">
          <Card
            className="row__card"
            title="Good Behavior Bonus"
            img="credit-card.png"
            text="The good conduct of citizens will be rewarded with city credits, that can be used by the citizens themselves in shops and/or supermarkets. These credits can be included in your Curriculum Vitae (C.V.) or presented to your school/university to prove your social and civic collaboration."
          />
        </div>
        <div className="row__card">
          <Card
            className="row__card"
            title="City Surveillance Body"
            img="police.png"
            text="The city’s surveillance corp is made of qualified police officers trained to ensure maximum security all around the city. All police officers will be periodically trained with updating courses in which new techniques and practices will be taught to ensure maximum safety."
          />
        </div>
        <div className="row__card">
          <Card
            className="row__card"
            title="Eagle 360"
            img="eagle.png"
            text="Eagle 360 is an advanced city surveillance system that allows city authorities to supervise comfortably and safely every corner of the city. Citizens, by downloading an app, will be able to report any kind of infringement or crime and actively contribute to the project."
          />
        </div>
      </div>

      <div className="cs-banner">
        <h2>More about Eagle 360</h2>
        <div className="cs-banner__img-overlay">
          <p>
            Eagle 360 it's an advanced security AI system that aims to protect
            every corner of the city. It is based on the collaboration between
            citizens and guards, allowing to keep an eye on the territory in a
            more effcient way. <br />
            <br />
            By implementing a system of hidden cameras all around the city
            police officers can watch over for criminality and other kind of
            stuff. The application will also provide an interactive map which
            will be updated periodically, so it can also work as an infocenter
            for foreigners.
          </p>
        </div>
        <div className="cs-banner__bottom">
          <h3>Do you like it? Give it a try!</h3>
          <button className="btn btn-grad cs-banner__bottom__btn">
            <Link className="btn-hero-link" to="/contribute">
              Download the App now
            </Link>
          </button>
        </div>
      </div>

      {/* Feature explanation */}
      <div className="cs-features">
        <h1>How do we protect our Cities?</h1>
        <img
          className="cs-features__img"
          src="secure-city.png"
          alt="Secure city representation"
          width="500"
        />
        <p>
          As our primary priority we want to preserve the life of our citizens
          by creating a secure environment within our cities, in order to
          guarantee the best life for everyone. We belive that the most powerful
          weapon we can use to fight criminality, violations and theft is engaging
          all the citizens in the city security program, with the aim of helping
          the CSB to supervise all over the city.
        </p>
      </div>
      {/* End Feature explanation Section */}

      <Footer />
    </div>
  );
};

export default CitySecurity;
