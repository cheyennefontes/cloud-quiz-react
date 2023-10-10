import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PractitionerQuiz from "./components/PractitionerQuiz";
import SolutionsArchitectQuiz from "./components/SolutionsArchitectQuiz";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/practitioner" element={<PractitionerQuiz />} />
          <Route path="/solutions-architect" element={<SolutionsArchitectQuiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
