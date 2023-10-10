import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";



const perguntas = [
  {
    opcoes: ["a) Amazon CloudWatch", "b) Amazon RDS", "c) Amazon S3", "d) Amazon DynamoDB"],
    pergunta: "Qual serviço da AWS permite que você monitore recursos e aplicativos em tempo real?",
    respostaCorreta: "a) Amazon CloudWatch",
  },
  {
    opcoes: ["a) Amazon EC2", "b) Amazon S3", "c) Amazon Lambda", "d) Amazon RDS"],
    pergunta: "Qual serviço da AWS é usado para executar aplicativos em servidores virtuais dedicados?",
    respostaCorreta: "a) Amazon EC2",
  },
  {
    opcoes: ["a) Amazon DynamoDB", "b) Amazon RDS", "c) Amazon S3", "d) Amazon Redshift"],
    pergunta: "Qual serviço de banco de dados da AWS é completamente gerenciado e oferece escalabilidade automática?",
    respostaCorreta: "a) Amazon DynamoDB",
  },
  {
    opcoes: ["a) Amazon S3", "b) Amazon Glacier", "c) Amazon EBS", "d) Amazon RDS"],
    pergunta: "Qual serviço de armazenamento da AWS é adequado para backup de longo prazo e arquivamento de dados?",
    respostaCorreta: "b) Amazon Glacier",
  },
  {
    opcoes: ["a) Amazon RDS", "b) Amazon DynamoDB", "c) Amazon Redshift", "d) Amazon Aurora"],
    pergunta: "Qual serviço de banco de dados da AWS é otimizado para análises e processamento de grandes volumes de dados?",
    respostaCorreta: "c) Amazon Redshift",
  },
  {
    opcoes: ["a) Amazon S3", "b) Amazon EBS", "c) Amazon Glacier", "d) Amazon DynamoDB"],
    pergunta: "Qual serviço de armazenamento da AWS é adequado para armazenar objetos grandes, como vídeos e imagens?",
    respostaCorreta: "a) Amazon S3",
  },
  {
    opcoes: ["a) Amazon S3", "b) Amazon CloudFront", "c) Amazon Route 53", "d) Amazon API Gateway"],
    pergunta: "Qual serviço da AWS é uma CDN (Content Delivery Network) que distribui conteúdo globalmente com baixa latência?",
    respostaCorreta: "b) Amazon CloudFront",
  },
  {
    opcoes: ["a) Amazon VPC", "b) Amazon Route 53", "c) Amazon S3", "d) Amazon CloudFront"],
    pergunta: "Qual serviço da AWS permite criar uma rede privada virtual isolada logicamente na nuvem?",
    respostaCorreta: "a) Amazon VPC",
  },
  {
    opcoes: ["a) Amazon EC2", "b) Amazon S3", "c) Amazon RDS", "d) Amazon Lambda"],
    pergunta: "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
    respostaCorreta: "d) Amazon Lambda",
  },
  {
    opcoes: ["a) Amazon DynamoDB", "b) Amazon RDS", "c) Amazon Aurora", "d) Amazon Redshift"],
    pergunta: "Qual serviço de banco de dados da AWS oferece desempenho de latência extremamente baixa e é adequado para aplicativos sensíveis à latência?",
    respostaCorreta: "c) Amazon Aurora",
  },
];

const App = () => {
  const [indice, setIndice] = useState(0);
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [mostrarErro, setMostrarErro] = useState(false);

  const verificarResposta = () => {
    if (respostaSelecionada) {
      if (respostaSelecionada === perguntas[indice].respostaCorreta) {
        setAcertos(acertos + 1);
      } else {
        setErros(erros + 1);
      }
      setMostrarErro(false);
      setMostrarResposta(true);
    } else {
      setMostrarErro(true);
    }
  };

  const mostrarProximaPergunta = () => {
    setIndice((indice + 1) % perguntas.length);
    setMostrarResposta(false);
    setRespostaSelecionada(null);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="CloudSection">
        <img src="/nuvem.png" alt="Mastercloud" className="CloudImage" />
        <div className="BotaoIniciarWrapper">
          <a href="#perguntas">
            <button className="BotaoIniciar">Iniciar</button>
          </a>
        </div>
      </div>

      <div className="card-product">
        <div className="Pergunta" id="perguntas">
          <p className="TextoPergunta">
            {`Pergunta ${indice + 1}: ${perguntas[indice].pergunta}`} <br />
            <br />
            {perguntas[indice].opcoes.map((opcao, index) => (
              <span key={index}>
                <input
                  type="radio"
                  name="opcao"
                  value={opcao}
                  disabled={mostrarResposta}
                  checked={respostaSelecionada === opcao}
                  onChange={() => setRespostaSelecionada(opcao)}
                />{" "}
                {opcao} <br />
              </span>
            ))}
          </p>
          {mostrarErro && <p className="Erro">Você precisa selecionar uma opção.</p>}
        </div>
        <div className="RespostaCorreta" data-testid="resposta-correta">
          {mostrarResposta && <p>Resposta Correta: {perguntas[indice].respostaCorreta}</p>}
        </div>

        <div className="Botoes">
          <button className="Botao" onClick={verificarResposta} disabled={mostrarResposta}>
            Verificar Resposta
          </button>
          <button className="Botao" onClick={mostrarProximaPergunta} disabled={!mostrarResposta}>
            Próxima Pergunta
          </button>
        </div>

        <div className="Estatisticas">
          <p className="Acertos">Acertos: {acertos}</p>
          <p className="Erros">Erros: {erros}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
