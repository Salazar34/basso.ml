import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="background-wrapper">
        <Navbar />
        <div className="hero">
          <div className="hero__text">
            <h1>You don't need to overthink. Just be smart</h1>
            <p>
              As well as the city, we have other project like the new way to
              move around the city, by sharing hydrogen cars.
            </p>
          </div>
          <div className="hero__img">
            <img
              src="idea.png"
              width="250"
              alt="project"
              className="hero__img"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="row__card">
          <Card
            className="row__card"
            title="No Pollution"
            img="car.png"
            text="lorem ipsum"
          />
        </div>
        <div className="row__card">
          <Card
            className="row__card"
            title="Renewable Energy"
            img="solar-energy.png"
            text="lorem ipsum"
          />
        </div>
        <div className="row__card">
          <Card
            className="row__card"
            title="Green Zones"
            img="river.png"
            text="lorem ipsum"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
