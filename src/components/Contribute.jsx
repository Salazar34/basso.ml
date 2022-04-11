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
            <div className="row sal">
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Bujenita Andrei Gabriel"
                        img="gamepad.png"
                        text="Andrei, called 'Jhonny', is a rumenian guy. One of our sources of ideas can be defined as the 'glue' of the group, while giving moral support to everyone mantaining a good mood. The content finder, that keeps us updated on what is important to know."
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Angotti Niccolò"
                        img="galaxy.png"
                        text="Angotti is the manager of 3D-making using unreal engine 5, executioner CEO of the projects."
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Offredi Nicola"
                        img="oferrari.png"
                        text="One of our 3D-designer colleagues, a high-blonde-man with a ponytail, is the most creative person of the group. "
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Sala Matteo"
                        img="sallogo.jpeg"
                        text="The leader of this gruop, is a tennis player with an infinite passion for coding, is the one who teach us all we have to know about coding."
                    />
                </div>
                <div className="row__card">
                    <Card
                        className="row__card"
                        title="Snati Nicola"
                        img="fire.png"
                        text="God"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Contribute;
