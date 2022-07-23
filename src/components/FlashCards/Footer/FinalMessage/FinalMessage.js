import "./style.css";
import party from "../../../../assets/img/party.png";
import sad from "../../../../assets/img/sad.png";

export default function FinalMessage({ iconsList, qtdAnswers, zapGoal }) {
  const userRightAnswers = iconsList.filter((items) => {
    if (items.iconId !== "wrong-option-icon") {
      return true;
    }
    return false;
  });

  return (
    <div
      className={`${qtdAnswers === 4 ? "final-message-container" : "hidden"}`}
    >
      <div className="grade-message">
        <img
          src={`${userRightAnswers.length >= zapGoal ? party : sad}`}
          alt="as"
        />
        <p>{`${
          userRightAnswers.length >= zapGoal ? "Parabéns!" : "Putz..."
        }`}</p>
      </div>
      <div>
        <h2 className="final-message">
          {`${
            userRightAnswers.length >= zapGoal
              ? `Você atingiu sua meta de ${zapGoal} flashcard(s) `
              : "Ainda faltam alguns ... Mas não desanime!"
          }`}
        </h2>
      </div>
    </div>
  );
}
