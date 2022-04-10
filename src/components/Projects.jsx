import React from "react";

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
              move around the city, by sharing hydrogen cars. More sustainable
              veichles means less pollution and a cleaner city for everyone.
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
            text="Our first tought when we decided to make this city, was how to reduce pollution to keep our world safe. One of the most sources of pollution is the smog created by cars and others veichle, so the solution we tought about is shared hydrogen cars. Hydrogen cars alone surely will reduce pollution, but using a system of car-sharing the pollution will be minimum."
          />
        </div>
        <div className="row__card">
          <Card
            className="row__card"
            title="Renewable Energy"
            img="solar-energy.png"
            text="Be renewable is our first goal, so having multiple sources of renewable energy is the only thing that our city is going to need to be auto-sustainable. Solar-energy, for the houses of the citizens. Hydroelectric and wind power for industries and thermic power for the city itself. Marco Schiavi best engineer we say, so he will be our hero.  "
          />
        </div>
        <div className="row__card">
          <Card
            className="row__card"
            title="Green Zones"
            img="river.png"
            text="Air is the most important thing keeping us alive, so we'll have great stretches of plants where citizens can walk to be in contact with nature. In the center of our city there will be a great common garden where people can grow their own plants. Our green zones are so important for us, that we will have a law against those who harm the enviroment.  "
          />
        </div>
      </div>
      <form action="" method="get" class="form-form">
        <div class="div-form">
          <label for="name" className="lbl in-lbl">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="William"
            required
            className="in-lbl"
          />
        </div>
        <div class="div-form">
          <label for="surname" className="lbl in-lbl">
            Surname:{" "}
          </label>
          <input
            type="text"
            surname="surname"
            id="surname"
            placeholder="Afton"
            required
            className="in-lbl"
          />
        </div>
        <div class="div-form">
          <label for="email" className="lbl in-lbl">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="purpleguy@hotmail.com"
            required
            className="in-lbl"
          />
        </div>
        <div class="div-form">
          <input type="submit" value="Submit!" className="in-lbl" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Projects;
