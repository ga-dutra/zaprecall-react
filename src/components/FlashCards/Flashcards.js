import flashcardsdeck from "./flashcardsdeck";
import logo from "../../assets/img/logo-zaprecall.png";
import turningIcon from "../../assets/img/setinha.png";
import React from "react";

function Flashcard({ number, question, answer, ...otherProps }) {
  const [hidden1, setHidden1] = React.useState(false);
  const [hidden2, setHidden2] = React.useState(true);
  const [hidden3, setHidden3] = React.useState(true);
  return (
    <>
      <div className={`question ${hidden1 ? "hidden" : ""}`}>
        <p>Pergunta {number}</p>
        <ion-icon
          onClick={() => {
            setHidden1(true);
            setHidden2(false);
          }}
          name="play-outline"
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

export default function Flashcards() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </div>
      <div className="questions">
        {flashcardsdeck.map((items, index) => (
          <Flashcard
            key={index}
            number={items.number}
            question={items.question}
            answer={items.answer}
          />
        ))}
      </div>
      <div className="footer">
        <h2>0/4 CONCLUÍDOS</h2>
      </div>
    </div>
  );
}

function IonIconsUtilizados() {
  return (
    <div>
      <ion-icon id="correct-option-icon" name="checkmark-circle"></ion-icon>
      <ion-icon id="wrong-option-icon" name="close-circle"></ion-icon>
      <ion-icon id="questionmark-option-icon" name="help-circle"></ion-icon>
    </div>
  );
}
