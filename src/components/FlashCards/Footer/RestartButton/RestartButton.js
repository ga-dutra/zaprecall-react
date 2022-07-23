import "./style.css";

import SplashScreen from "../../../SplashScreen/SplashScreen";

export default function RestartButton({
  qtdAnswers,
  setCurrentPage,
  setHasStarted,
}) {
  return (
    <div
      onClick={() => {
        setCurrentPage(
          <SplashScreen
            setCurrentPage={setCurrentPage}
            setHasStarted={setHasStarted}
          />
        );
      }}
      className={`${qtdAnswers === 4 ? "restart-button" : "hidden"}`}
    >
      REINICIAR RECALL
    </div>
  );
}
