const solutionsArchitectQuestions = [
  {
    opcoes: ["a) Amazon S3", "b) Amazon Glacier", "c) Amazon EFS", "d) AWS Storage Gateway"],
    pergunta: "Uma empresa precisa armazenar grandes volumes de dados para backup e recuperação de desastres, com baixo custo e alta durabilidade. Qual serviço da AWS é mais adequado para este caso?",
    respostaCorreta: "a) Amazon S3",
  },
  {
    opcoes: ["a) Amazon EC2", "b) Amazon ECS", "c) AWS Lambda", "d) AWS Elastic Beanstalk"],
    pergunta: "Uma aplicação de comércio eletrônico precisa ser altamente escalável, com a capacidade de lidar com picos de tráfego sazonais. Qual serviço da AWS você usaria para hospedar essa aplicação?",
    respostaCorreta: "b) Amazon ECS",
  },
  {
    opcoes: ["a) Amazon RDS", "b) Amazon DynamoDB", "c) Amazon Redshift", "d) Amazon Aurora"],
    pergunta: "Uma empresa está construindo um sistema de análise de dados em tempo real para monitorar o comportamento dos usuários em seu aplicativo. Qual serviço da AWS é mais adequado para armazenar e consultar grandes volumes de dados em tempo real?",
    respostaCorreta: "d) Amazon Aurora",
  },
  {
    opcoes: ["a) Amazon Kinesis", "b) AWS Glue", "c) Amazon Redshift Spectrum", "d) AWS Data Pipeline"],
    pergunta: "Uma empresa deseja realizar análises complexas em grandes conjuntos de dados armazenados no Amazon S3. Qual serviço da AWS permite consultar dados diretamente no Amazon S3 sem a necessidade de carregar os dados em um banco de dados separado?",
    respostaCorreta: "c) Amazon Redshift Spectrum",
  },
  {
    opcoes: ["a) Amazon API Gateway", "b) AWS App Mesh", "c) Amazon CloudFront", "d) AWS Direct Connect"],
    pergunta: "Uma aplicação da web precisa oferecer conteúdo estático (por exemplo, imagens, vídeos) para usuários em todo o mundo com baixa latência. Qual serviço da AWS você usaria para distribuir o conteúdo globalmente?",
    respostaCorreta: "c) Amazon CloudFront",
  },
  {
    opcoes: ["a) AWS Lambda", "b) Amazon ECS", "c) AWS Fargate", "d) Amazon Elastic Beanstalk"],
    pergunta: "Uma empresa deseja executar microserviços sem se preocupar com a infraestrutura subjacente. Qual serviço da AWS oferece um ambiente sem servidor para execução de código?",
    respostaCorreta: "a) AWS Lambda",
  },
  {
    opcoes: ["a) Amazon VPC", "b) Amazon Direct Connect", "c) Amazon Route 53", "d) Amazon CloudFront"],
    pergunta: "Uma empresa deseja conectar sua infraestrutura de TI local à AWS de forma dedicada e privada. Qual serviço da AWS é mais adequado para estabelecer uma conexão de rede dedicada?",
    respostaCorreta: "b) Amazon Direct Connect",
  },
  {
    opcoes: ["a) Amazon S3", "b) Amazon EFS", "c) Amazon RDS", "d) Amazon DynamoDB"],
    pergunta: "Uma aplicação corporativa precisa de um sistema de arquivos compartilhado que pode ser acessado por várias instâncias EC2. Qual serviço de armazenamento da AWS é adequado para este caso?",
    respostaCorreta: "b) Amazon EFS",
  },
  {
    opcoes: ["a) Amazon RDS", "b) Amazon DynamoDB", "c) Amazon Aurora", "d) Amazon Redshift"],
    pergunta: "Uma empresa está construindo um aplicativo de alta performance que requer latência extremamente baixa para consultas de banco de dados. Qual serviço de banco de dados da AWS é otimizado para aplicativos sensíveis à latência?",
    respostaCorreta: "c) Amazon Aurora",
  },
  {
    opcoes: ["a) Amazon SageMaker", "b) AWS Glue", "c) Amazon Comprehend", "d) Amazon Polly"],
    pergunta: "Uma empresa está desenvolvendo um sistema de aprendizado de máquina para análise de sentimentos em grandes volumes de texto. Qual serviço da AWS é adequado para análise de texto e processamento de linguagem natural?",
    respostaCorreta: "c) Amazon Comprehend",
  },
];

export default solutionsArchitectQuestions;
