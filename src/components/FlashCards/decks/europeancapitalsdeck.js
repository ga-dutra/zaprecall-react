const europeancapitalsdeckquestions = [
  {
    question: "Qual é a capital da Alemanha ?",
    answer: "Berlim",
  },
  {
    question: "Qual é a capital da Áustria ?",
    answer: "Viena",
  },
  {
    question: "Qual é a capital da Finlândia ?",
    answer: "Helsinque",
  },
  {
    question: "Qual é a capital da Espanha ?",
    answer: "Madri",
  },
  {
    question: "Qual é a capital de Monaco ?",
    answer: "Cidade de Monaco",
  },
  {
    question: "Qual é a capital da Irlanda ?",
    answer: "Dublin",
  },
  {
    question: "Qual é a capital de Porgual ?",
    answer: "Lisboa ",
  },
  {
    question: "Qual é a capital da Suiça ?",
    answer: "Berna",
  },
  {
    question: "Qual é a capital da Suécia ?",
    answer: "Estocolmo",
  },
  {
    question: "Qual é a capital da Dinamarca ?",
    answer: "Copenhague",
  },
  {
    question: "Qual é a capital da Croácia ?",
    answer: "Zagreb",
  },
  {
    question: "Qual é a capital da Letônia ?",
    answer: "Riga",
  },
  {
    question: "Qual é a capital da Bulgária ?",
    answer: "Sofia",
  },
  {
    question: "Qual é a capital da Sérvia ?",
    answer: "Belgrado",
  },
  {
    question: "Qual é a capital da Turquia ?",
    answer: "Ancara",
  },
  {
    question: "Qual é a capital da Ucrânia ?",
    answer: "Kiev",
  },
];

function sortQuestions(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

const newQuestions = sortQuestions(europeancapitalsdeckquestions);
const europeancapitalsdeck = [{}, {}, {}, {}];

for (let i = 0; i < 4; i++) {
  europeancapitalsdeck[i].number = i + 1;
  europeancapitalsdeck[i].question = newQuestions[i].question;
  europeancapitalsdeck[i].answer = newQuestions[i].answer;
  europeancapitalsdeck[i].hidden1 = false;
  europeancapitalsdeck[i].hidden2 = true;
  europeancapitalsdeck[i].hidden3 = true;
}
export default europeancapitalsdeck;
