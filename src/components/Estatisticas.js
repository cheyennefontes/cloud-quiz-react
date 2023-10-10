import React from "react";
import "./Estatisticas.css";

const Estatisticas = ({ acertos, erros }) => {
  return (
    <div className="estatisticas-container">
      <div className="estatisticas-content">
        <p className="acertosEstatistica">Corretas: {acertos}</p>
        <p className="errosEstatistica">Incorretas {erros}</p>
      </div>
    </div>
  );
};

export default Estatisticas;
