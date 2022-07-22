import "./style.css";
function FinalIcons({ iconId, iconName }) {
  return (
    <div className="">
      <ion-icon id={iconId} name={iconName}></ion-icon>
    </div>
  );
}

export default function Footer({ iconsList, qtdAnswers }) {
  return (
    <div className="footer">
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
    </div>
  );
}
