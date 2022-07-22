import flashcardsdeck from "./flashcardsdeck";
import "./style.css";
import Header from "./Header";

import turningIcon from "../../assets/img/setinha.png";
import React from "react";

function Flashcard({ number, question, answer, ...otherProps }) {
  const [hidden1, setHidden1] = React.useState(false);
  const [hidden2, setHidden2] = React.useState(true);
  const [hidden3, setHidden3] = React.useState(true);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [iconAnswerType, setIconAnswerType] = React.useState("play-outline");
  const [iconAnswerId, setIconAnswerId] = React.useState("");
  return (
    <>
      <div className={`question ${hidden1 ? "hidden" : ""}`}>
        <p className={userAnswer}>Pergunta {number}</p>
        <ion-icon
          id={iconAnswerId}
          onClick={() => {
            setHidden1(true);
            setHidden2(false);
          }}
          name={iconAnswerType}
        ></ion-icon>
      </div>
      <div className={`front-question ${hidden2 ? "hidden" : ""}`}>
        <h2> {question}</h2>
        <img
          onClick={() => {
            setHidden2(true);
            setHidden3(false);
          }}
          src={turningIcon}
          alt="Turning question icon"
        />
      </div>
      <div className={`back-question ${hidden3 ? "hidden" : ""}`}>
        <h2>{answer}</h2>
        <div className="answer-options">
          <div
            onClick={() => {
              setUserAnswer("wrong-answer");
              setHidden1(false);
              setHidden3(true);
              setIconAnswerType("close-circle");
              setIconAnswerId("wrong-option-icon");
              otherProps.setQtdAnswers(otherProps.qtdAnswers + 1);
              otherProps.setIconsList([
                ...otherProps.iconsList,

                {
                  iconName: "close-circle",
                  iconId: "wrong-option-icon",
                },
              ]);
            }}
          >
            Não
            <br /> lembrei
          </div>
          <div
            onClick={() => {
              setUserAnswer("neutral-answer");
              setHidden1(false);
              setHidden3(true);
              setIconAnswerType("help-circle");
              setIconAnswerId("neutral-option-icon");
              otherProps.setQtdAnswers(otherProps.qtdAnswers + 1);
              otherProps.setIconsList([
                ...otherProps.iconsList,
                {
                  iconName: "help-circle",
                  iconId: "neutral-option-icon",
                },
              ]);
              console.log(otherProps.iconsList);
            }}
          >
            Quase não lembrei
          </div>
          <div
            onClick={() => {
              setUserAnswer("right-answer");
              setHidden1(false);
              setHidden3(true);
              setIconAnswerType("checkmark-circle");
              setIconAnswerId("right-option-icon");
              otherProps.setQtdAnswers(otherProps.qtdAnswers + 1);
              otherProps.setIconsList([
                ...otherProps.iconsList,
                {
                  iconName: "checkmark-circle",
                  iconId: "right-option-icon",
                },
              ]);
            }}
          >
            Zap!
          </div>
        </div>
      </div>
    </>
  );
}
// const finalIcons = [{}];

function FinalIcons({ iconId, iconName }) {
  return (
    <div className="">
      <ion-icon id={iconId} name={iconName}></ion-icon>
    </div>
  );
}

export default function Flashcards() {
  const [qtdAnswers, setQtdAnswers] = React.useState(0);
  const [iconsList, setIconsList] = React.useState([]);

  // if (iconsList !== "a") {
  //   finalIcons.push(iconsList);
  // }
  // console.log(`finalIcons: ${finalIcons}`);
  return (
    <div>
      <Header />
      <div className="questions">
        {flashcardsdeck.map((items, index) => (
          <Flashcard
            key={index}
            number={items.number}
            question={items.question}
            answer={items.answer}
            qtdAnswers={qtdAnswers}
            setQtdAnswers={setQtdAnswers}
            iconsList={iconsList}
            setIconsList={setIconsList}
          />
        ))}
      </div>
      <div className="footer">
        <h2>{qtdAnswers}/4 CONCLUÍDOS</h2>
        <div
          className="icons-list"
          // {`icons-list hidden ${finalIcons[1] ? "hidden" : "hidden"}`}
        >
          {iconsList.map((items, index) => (
            <FinalIcons
              key={index}
              iconId={items.iconId}
              iconName={items.iconName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
