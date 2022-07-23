import Flashcards from "../FlashCards/Flashcards";
import logo from "../../assets/img/logo-zaprecall.png";
import "./style.css";

export default function SplashScreen({ setCurrentPage, setHasStarted }) {
  function startRecall() {
    setHasStarted(true);
    setCurrentPage(
      <Flashcards
        setCurrentPage={setCurrentPage}
        setHasStarted={setHasStarted}
      />
    );
  }

  return (
    <div className="splash-screen">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
      <div onClick={startRecall} className="iniciate-button">
        Iniciar Recall!!
      </div>
    </div>
  );
}