import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(<SplashScreen />);
  return (
    <>
      {hasStarted ? (
        currentPage
      ) : (
        <SplashScreen
          setCurrentPage={setCurrentPage}
          setHasStarted={setHasStarted}
        />
      )}
    </>
  );
}
