import Flashcards from "../FlashCards/Flashcards";
import logo from "../../assets/img/logo-zaprecall.png";

export default function HomeScreen({ setCurrentPage, setHasStarted }) {
  function startRecall() {
    setHasStarted(true);
    setCurrentPage(<Flashcards />);
  }

  return (
    <div className="home-screen">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <div onClick={startRecall} className="iniciate-button">
        Iniciar Recall!!
      </div>
    </div>
  );
}
