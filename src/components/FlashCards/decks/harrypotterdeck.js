const harrypotterdeckquestions = [
  {
    question: "Antes de Dumbledore, quem era o Diretor de Hogwarts?",
    answer: "Armando Dippet",
  },
  {
    question: "Quem dá aula de Transfiguração?",
    answer: "Professora Minerva McGonagall",
  },
  {
    question: "Quem é o professor de Poções?",
    answer: "Professor Severus Snape",
  },
  {
    question:
      "O Pêndulo Estrela-do-Mar é uma tática usada por qual posição do Quadribol?",
    answer: "Goleiro",
  },
  {
    question: "Quem foi a primeira bruxa ou bruxo a criar um basilisco?",
    answer: "Herpo, o Sujo",
  },
  {
    question:
      "Quais são os feitiços que representam as Maldições Imperdoáveis?",
    answer: "Crucio, Imperio e Avada Kedavra",
  },
  {
    question:
      "Qual é o termo para um objeto feito com um fragmento da alma de um mago?",
    answer: "Horcrux",
  },
  {
    question: "Quem é o zelador de Hogwarts?",
    answer: "Filch",
  },
  {
    question: "Qual é o feitiço defensivo mais poderoso?",
    answer: "Feitiço do Patrono",
  },
  {
    question: "Qual é a capital da Dinamarca ?",
    answer: "Copenhague",
  },
  {
    question:
      "Os professores de Defesa Contra as Artes das Trevas costumam durar quanto tempo?",
    answer: "Um ano",
  },
  {
    question:
      "Qual é o melhor lugar para conseguir repelente de lesmas carnívoras?",
    answer: "Beco Diagonal",
  },
  {
    question: "Qual é a marca registrada de Godric Gryffindor?",
    answer: "Espada",
  },
  {
    question: "Qual é o traço que Godric Gryffindor mais valoriza em um aluno?",
    answer: "Coragem",
  },
  {
    question: "Quem era o dono original do Chapéu Seletor?",
    answer: "Godric Gryffindor",
  },
  {
    question: "Quem é o fantasma da Lufa-Lufa?",
    answer: "O Frei Gorducho",
  },
];

function sortQuestions(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

const newQuestions = sortQuestions(harrypotterdeckquestions);
const harrypotterdeck = [{}, {}, {}, {}];

for (let i = 0; i < 4; i++) {
  harrypotterdeck[i].number = i + 1;
  harrypotterdeck[i].question = newQuestions[i].question;
  harrypotterdeck[i].answer = newQuestions[i].answer;
  harrypotterdeck[i].hidden1 = false;
  harrypotterdeck[i].hidden2 = true;
  harrypotterdeck[i].hidden3 = true;
}
export default harrypotterdeck;
