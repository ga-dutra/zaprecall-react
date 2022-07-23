import "./style.css";
import party from "../../../../assets/img/party.png";
import sad from "../../../../assets/img/sad.png";

export default function FinalMessage({ iconsList, qtdAnswers }) {
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
        <img src={`${userRightAnswers.length === 4 ? party : sad}`} alt="as" />
        <p>{`${userRightAnswers.length === 4 ? "Parabéns!" : "Putz..."}`}</p>
      </div>
      <div>
        <h2 className="final-message">
          {`${
            userRightAnswers.length === 4
              ? "Você não esqueceu de nenhum flashcard!"
              : "Ainda faltam alguns ... Mas não desanime!"
          }`}
        </h2>
      </div>
    </div>
  );
}
