import flashcards from "../flashcards";

function Flashcard({ number, question, answer, ...otherProps }) {
  return (
    <>
      <div className=" question">
        <p>Pergunta {number}</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className="front-question ">
        <h2> {question}</h2>
        <img src="../../assets/img/setinha.png" alt="Turning question icon" />
      </div>
      <div className="back-question ">
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
        <img src="../../assets/img/logo-zaprecall.png" alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </div>
      <div className="questions">
        {flashcards.map((items, index) => (
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
