import Flashcards from "./Flashcards";

export default function HomeScreen({ setCurrentPage, setHasStarted }) {
  function startRecall() {
    setHasStarted(true);
    setCurrentPage(<Flashcards />);
  }

  return (
    <div className="home-screen">
      <img src="../../assets/img/logo-zaprecall.png" alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <div onClick={startRecall} className="iniciate-button">
        Iniciar Recall!!
      </div>
    </div>
  );
}
