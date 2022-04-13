import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserShield,
  faPeopleCarry,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      {/* Backgroun wrapper */}
      <div className="background-wrapper">
        {/* Navbar */}
        <Navbar />
        {/* End Navbar */}
        <div className="hero">
          <div className="hero__text">
            <h1>BASSO - A new way to live the city</h1>
            <p>
              The main place in which most industrial activities take place is
              the city which, nowadays, represents a serious problem for
              pollution that must be solved with timely interventions.{" "}
            </p>
            <button className="btn btn-hero">
              <Link className="btn-hero-link" to="/goals">
                Our Projects and Goals
              </Link>
            </button>
          </div>
          <div className="hero__img">
            <img className="hero-img" src="logo.png" alt="Logo" width="500" />
          </div>
        </div>
      </div>
      {/* End Background Wrapper */}

      {/* Goal cards */}
      <div className="container goals-cards">
        <div className="row">
          <div className="col home-features-col" id="hfc-1">
            <h1>Community</h1>
            <FontAwesomeIcon
              className="goals-icon"
              icon={faPeopleCarry}
              onLoad={null}
            />
            <p>Cooperation and mutual respect are the basis of our system.</p>
          </div>
          <div className="col home-features-col" id="hfc-2">
            <h1>Modernity</h1>
            <FontAwesomeIcon className="goals-icon" icon={faNetworkWired} />
            <p>
              Modernization is the key to achieve a functional and efficient
              system.
            </p>
          </div>
          <div className="col home-features-col" id="hfc-3">
            <h1>Security</h1>
            <FontAwesomeIcon className="goals-icon" icon={faUserShield} />
            <p>
              Security first. A safe city is also a less strict city towards
              citizens.
            </p>
          </div>
        </div>
      </div>
      {/* End Goal cards */}
      <div className="container video-section">
        <h1 className="video-header">
          A quick introduction about us and the project
        </h1>
        <video width="800" src="BASSO_PITCH_VIDEO.mp4" controls></video>
        <div className="project-mission">
          <div className="project-mission__problem">
            <div className="project-mission__problem__text">
              <h1>The problem</h1>
              <img
                className="project-mission__problem__text__problem-img"
                src="pollution.jpg"
                alt="Pollution vector representation"
                width="500"
              />
              <p>
                In the last decades the percentage of pollution in all cities
                and metropolis has constantly increased, due to the continuous
                use of polluting vehicles and unsustainable energies. This big
                problem, that has been undervalued for years, is now surfacing
                with all the releated consequences, i.e.{" "}
              </p>
              <ol>
                <li>
                  Increasing mortality related to cardivascular and respiratory
                  diseases{" "}
                </li>
                <li>
                  The rising of global temperatures resulting in melting glaciers and
                  increasing natural disasters.
                </li>
                <li>
                  Continuing extinction of animal species, caused by climate
                  anomalies and/or continuing predator migrations.
                </li>
                <li>
                  Disruption of natural ecosystems and destruction of animal
                  habitats.{" "}
                </li>
              </ol>
            </div>
            <div className="project-mission__problem__img">
              <img
                src="pollution.jpg"
                alt="Pollution vector representation"
                width="500"
              />
            </div>
          </div>
          <div className="project-mission__pollution_consequences">
            <div className="project-mission__pollution_consequences__text">
              <h1>Pollution consequences</h1>
              <img
                className="project-mission__pollution_consequences__header-img"
                src="mortality.png"
                alt=""
              />
              <p>
                Cities, as primary places in leading daily activities and places
                with the highest concentration of movement, are the cause of most
                environmental pollution. The high concentration of polluting
                substances in the city allows an easy diffusion in every part
                of the atmosphere, thanks also to the intervention of the air
                currents. This leads to the spread of these substances
                throughout the world, causing serious problems that are
                gradually destroying the Earth.
              </p>
              <button className="btn btn-grad project-mission__pollution_consequences__text__button">
                <Link className="btn-hero-link" to="/contribute">
                  Help us save the world
                </Link>
              </button>
            </div>
            <div className="project-mission__pollution_consequences__images">
              <img src="mortality.png" alt="" />
              <img src="temperature.png" alt="" />
              <img src="extinction.png" alt="" />
              <img src="ecosystems.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
