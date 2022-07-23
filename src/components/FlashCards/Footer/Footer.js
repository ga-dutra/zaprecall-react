import "./style.css";
import FinalMessage from "./FinalMessage/FinalMessage";
import RestartButton from "./RestartButton/RestartButton";

function FinalIcons({ iconId, iconName }) {
  return (
    <div className="">
      <ion-icon id={iconId} name={iconName}></ion-icon>
    </div>
  );
}

export default function Footer({
  iconsList,
  qtdAnswers,
  setCurrentPage,
  setHasStarted,
}) {
  return (
    <div className="footer">
      <FinalMessage iconsList={iconsList} qtdAnswers={qtdAnswers} />
      <h2>{qtdAnswers}/4 CONCLUÍDOS</h2>
      <div className="icons-list">
        {iconsList.map((items, index) => (
          <FinalIcons
            key={index}
            iconId={items.iconId}
            iconName={items.iconName}
          />
        ))}
      </div>
      <RestartButton
        setCurrentPage={setCurrentPage}
        setHasStarted={setHasStarted}
        qtdAnswers={qtdAnswers}
      />
    </div>
  );
}
