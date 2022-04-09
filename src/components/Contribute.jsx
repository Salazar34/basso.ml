import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";

const Contribute = () => {
    return (
        <div className="Contribute">
            <div className="background-wrapper">
                <Navbar />
                <div className="hero">
                    <div className="hero__text">
                        <h1>Are you happy with yourself? Make us happy too</h1>
                        <p>
                            If you like this project and you want to contribute to it, you can donate  or give us a hint for the improvement of it.
                        </p>
                    </div>
                    <div className="hero__img">
                        <img
                            src="dollars.png"
                            width="250"
                            alt="contribute"
                            className="hero__img"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Bujenita Andrei Gabriel"
                        img="gamepad.png"
                        text="Our first tought when we decided to make this city, was how to reduce pollution to keep our world safe. One of the most sources of pollution is the smog created by cars and others veichle, so the solution we tought about is shared hydrogen cars. Hydrogen cars alone surely will reduce pollution, but using a system of car-sharing the pollution will be minimum."
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Angotti Niccolò"
                        img="galaxy.png"
                        text="Be renewable is our first goal, so having multiple sources of renewable energy is the only thing that our city is going to need to be auto-sustainable. Solar-energy, for the houses of the citizens. Hydroelectric and wind power for industries and thermic power for the city itself. Marco Schiavi best engineer we say, so he will be our hero.  "
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Offredi Nicola"
                        img="oferrari.png"
                        text="League of legend player, he is one of our 3D-designer colleagues, a high-blonde-man with codino."
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Sala Matteo"
                        img="sallogo.jpeg"
                        text="Air is the most important thing keeping us alive, so we'll have great stretches of plants where citizens can walk to be in contact with nature. In the center of our city there will be a great common garden where people can grow their own plants. Our green zones are so important for us, that we will have a law against those who harm the enviroment.  "
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Snati Nicola"
                        img="fire.png"
                        text="Air is the most important thing keeping us alive, so we'll have great stretches of plants where citizens can walk to be in contact with nature. In the center of our city there will be a great common garden where people can grow their own plants. Our green zones are so important for us, that we will have a law against those who harm the enviroment.  "
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Contribute;
