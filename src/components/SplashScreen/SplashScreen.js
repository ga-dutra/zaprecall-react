import Flashcards from "../FlashCards/Flashcards";
import logo from "../../assets/img/logo-zaprecall.png";
import "./style.css";
import React from "react";

export default function SplashScreen({ setCurrentPage, setHasStarted }) {
  const [zapGoal, setZapGoal] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  function startRecall() {
    if (Number(zapGoal) < 1 || Number(zapGoal) > 4) {
      setInputError("A meta deve ser um valor entre 1 e 4!");
    }
    if (
      String(deck) !== "reactdeck" &&
      String(deck) !== "europeancapitalsdeck" &&
      String(deck) !== "harrypotterdeck" &&
      String(deck) !== "javascriptdeck"
    ) {
      alert("Por favor, selecione um deck");
    } else {
      setHasStarted(true);
      setCurrentPage(
        <Flashcards
          setCurrentPage={setCurrentPage}
          setHasStarted={setHasStarted}
          zapGoal={Number(zapGoal)}
          deck={deck}
        />
      );
    }
  }

  const possibleDecks = [
    { value: "", text: "Escolha seu deck..", disabled: "disabled selected" },
    { value: "reactdeck", text: "Fundamentos de React" },
    { value: "javascriptdeck", text: "Fundamentos de JavaScript" },
    { value: "europeancapitalsdeck", text: "Capitais Européias" },
    { value: "harrypotterdeck", text: "Harry Potter World" },
  ];
  const [deck, setDeck] = React.useState(possibleDecks[0].value);
  const handleChange = (event) => {
    setDeck(event.target.value);
  };

  return (
    <div className="splash-screen">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <select
        className="deck-selection"
        name="deck-selection"
        value={deck}
        onChange={handleChange}
      >
        {possibleDecks.map((option) => (
          <option key={option.value} value={option.value}>
            {" "}
            {option.text}
          </option>
        ))}
      </select>
      <div className="zap-goal-input">
        <input
          type="number"
          id="zap-goal"
          min="1"
          max="4"
          placeholder="Digite sua meta de zaps.."
          onChange={(event) => setZapGoal(event.target.value)}
          value={zapGoal}
          required
        />
        <small id="error-zap-goal">{inputError}</small>
      </div>
      <div onClick={startRecall} className="iniciate-button">
        Iniciar Recall!!
      </div>
    </div>
  );
}
