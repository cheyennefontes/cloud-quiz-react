import React, { useState } from "react";
import Estatisticas from "./Estatisticas";
import solutionsArchitectQuestions from "../data/solutionsArchitectQuestions";

const SolutionsArchitectQuiz = () => {
  const [respostas, setRespostas] = useState(Array(solutionsArchitectQuestions.length).fill(null));
  const [mostrarRespostas, setMostrarRespostas] = useState(Array(solutionsArchitectQuestions.length).fill(false));
  const [mostrarErro, setMostrarErro] = useState(Array(solutionsArchitectQuestions.length).fill(false));

  const perguntas = solutionsArchitectQuestions;

  const handleInputChange = (index, opcao) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = opcao;
    setRespostas(novasRespostas);

    const novosErros = [...mostrarErro];
    novosErros[index] = false;
    setMostrarErro(novosErros);
  };

  const handleMostrarResposta = (index) => {
    if (respostas[index] === null) {
      const novosErros = [...mostrarErro];
      novosErros[index] = true;
      setMostrarErro(novosErros);
    } else {
      const novasRespostas = [...mostrarRespostas];
      novasRespostas[index] = true;
      setMostrarRespostas(novasRespostas);
    }
  };

  const numAcertos = mostrarRespostas.filter((mostrar, index) => {
    const resposta = respostas[index];
    const respostaCorreta = perguntas[index].respostaCorreta;
    return mostrar && resposta === respostaCorreta;
  }).length;

  const numErros = mostrarRespostas.filter((mostrar, index) => {
    const resposta = respostas[index];
    const respostaCorreta = perguntas[index].respostaCorreta;
    return mostrar && resposta !== respostaCorreta;
  }).length;

  return (
    <div className="quiz-container">
      <div className="quiz-container">
        <Estatisticas acertos={numAcertos} erros={numErros} />
    </div>
      {perguntas.map((pergunta, index) => (
        <div className="card-product" key={index}>
          <div className="Pergunta">
            <p className="TextoPergunta">
              {`Pergunta ${index + 1} - ${pergunta.pergunta}`} <br />
              <br />
              <div className="OpcaoResposta">
                {pergunta.opcoes.map((opcao, opcaoIndex) => (
                  <span key={opcaoIndex}>
                    <input
                      type="radio"
                      name={`opcao-${index}`}
                      value={opcao}
                      checked={respostas[index] === opcao}
                      onChange={() => handleInputChange(index, opcao)}
                      disabled={mostrarRespostas[index]}
                    />{" "}
                    {opcao} <br />
                  </span>
                ))}
              </div>
              {!mostrarRespostas[index] && (
                <button className="BotaoMostrarResposta" onClick={() => handleMostrarResposta(index)}>
                  Mostrar Resposta
                </button>
              )}
              {mostrarErro[index] && <p className="Erro">Por favor, selecione uma opção.</p>}
              {mostrarRespostas[index] && respostas[index] === pergunta.respostaCorreta && (
                <p className="Acerto">Você acertou!</p>
              )}
              {mostrarRespostas[index] && respostas[index] !== pergunta.respostaCorreta && (
                <p className="Erro">Que pena, você errou :(</p>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default SolutionsArchitectQuiz;
