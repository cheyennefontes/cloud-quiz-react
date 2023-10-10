import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="CloudSection">
      <img src="/nuvem.png" alt="Mastercloud" className="CloudImage" />
      <div className="BotaoIniciarWrapper">
        <Link to="/practitioner">
          <button className="BotaoIniciar">Practitioner</button>
        </Link>
        <Link to="/solutions-architect">
          <button className="BotaoIniciar">Solutions Architect</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
