export default function Questions() {
  return (
    <>
      <div className="front-question">
        <h2> O que é JSX?</h2>
        <img src="../../assets/img/setinha.png" alt="Turning question icon" />
      </div>
      <div className="back-question">
        <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
        <div className="answer-options">
          <div>
            Não
            <br /> lembrei
          </div>
          <div>Quase não lembrei</div>
          <div>Zap!</div>
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
  },
  {
    question: "O React é __ ",
    answer: "Uma biblioteca JavaScript para construção de interfaces",
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "Letra maiúscula",
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "Expressões",
  },
  {
    question: "ReactDOM nos ajuda __",
    answer: "Interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: "Usamos o npm para __",
    answer: "Gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes ",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];
