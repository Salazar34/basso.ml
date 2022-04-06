import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";

const CitySecurity = () => {
    return (
        <div className="city-secyrity">
            <div className="background-wrapper">
                <Navbar />
                <div className="hero">
                    <div className="hero__text">
                        <h1>Making your world the safest place to live.</h1>
                        <p>The security of our city is founded on the common sense of the citizens, even though there will be a surveillance corp always supervising the city.</p>
                    </div>
                    <div className="hero__img">
                        <img src="city.png" width="250" alt="city-security" className="hero__img" />
                    </div>
                </div>
            </div>
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
                        text="Eagle 360 is an advanced city surveillance system that allows city authorities to supervise comfortably and safely every corner of the city. Citizens, by downloading an app, will be able to report any kind of infringement or crime and actively contributing to the project."
                    />
                </div>
            </div>

            <div className="banner cs-banner">
                <h2>More Specifics from Eagle 360</h2>
                <img src="road.png" alt="road" className="cs-banner__img" />
                <div className="cs-banner__img-overlay">
                    <p className="cs-banner__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maiores, explicabo aliquid ipsum expedita, inventore aspernatur veniam ex labore facilis quae vitae aut commodi itaque earum vero quasi sequi fuga?
                    </p>
                    <p className="cs-banner__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maiores, explicabo aliquid ipsum expedita, inventore aspernatur veniam ex labore facilis quae vitae aut commodi itaque earum vero quasi sequi fuga?
                    </p>
                    <p className="cs-banner__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maiores, explicabo aliquid ipsum expedita, inventore aspernatur veniam ex labore facilis quae vitae aut commodi itaque earum vero quasi sequi fuga?
                    </p>
                    <p className="cs-banner__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maiores, explicabo aliquid ipsum expedita, inventore aspernatur veniam ex labore facilis quae vitae aut commodi itaque earum vero quasi sequi fuga?
                    </p>
                </div>
            </div>

            {/* Feature explanation */}
            <div className="cs-features">
                <h1>How do we protect our Cities?</h1>
                <img className="cs-features__img" src="secure-city.png" alt="Secure city representation" width="500" />

                <p>As our primary priority we want to preserve the life of our citizens by creating a secure environment within our cities, in order to guarantee the best life for everyone. We belive that the most powerful weapon we can use to fight criminality, violations and theft is engage all the citizens in the city security program, with the aim of helping the CSB to supervise all over the city.</p>
            </div>
            {/* End Feature explanation Section */}

            <Footer />
        </div>
    );
};

export default CitySecurity;
