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

function sortQuestions(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

const newQuestions = sortQuestions(questions);
const flashcards = [{}, {}, {}, {}];
for (let i = 0; i < 4; i++) {
  flashcards[i].number = i + 1;
  flashcards[i].question = newQuestions[i].question;
  flashcards[i].answer = newQuestions[i].answer;
}
export default flashcards;
