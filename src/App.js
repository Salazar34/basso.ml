import React from "react";

import "./components/css/Main.css";

import Home from "./components/Home";
import Goals from "./components/Goals";
import Contribute from "./components/Contribute";
import Municipality from "./components/Municipality";
import Projects from "./components/Projects";
import CitySecurity from "./components/CitySecurity";
import ErrorPage from "./components/ErrorPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/city-security" element={<CitySecurity />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/municipality" element={<Municipality />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
