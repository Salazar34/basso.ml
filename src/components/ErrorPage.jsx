import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      {/* Background wrapper */}
      <div className="background-wrapper">
        {/* Navbar section */}
        <Navbar />
        {/* End Navbar */}
        <div className="error-header">
          <h1>404 - Not Found</h1>
          <p className="error-header__message">
            Not the right place{" "}
            <span className="error-header__message__double-dots">:</span>
            <span className="error-header__message__backspace-character">
              \
            </span>
          </p>
          <Link className="error-header__link" to="/">
            Go back to the Home page
          </Link>
        </div>
      </div>
      {/* End Background Wrapper */}

      <Footer />
    </div>
  );
};

export default ErrorPage;
