const reactdeckquestions = [
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

function sortQuestions(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

const newQuestions = sortQuestions(reactdeckquestions);
const reactdeck = [{}, {}, {}, {}];

for (let i = 0; i < 4; i++) {
  reactdeck[i].number = i + 1;
  reactdeck[i].question = newQuestions[i].question;
  reactdeck[i].answer = newQuestions[i].answer;
  reactdeck[i].hidden1 = false;
  reactdeck[i].hidden2 = true;
  reactdeck[i].hidden3 = true;
}

export default reactdeck;
