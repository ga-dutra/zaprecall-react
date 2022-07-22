import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(<HomeScreen />);
  return (
    <>
      {hasStarted ? (
        currentPage
      ) : (
        <HomeScreen
          setCurrentPage={setCurrentPage}
          setHasStarted={setHasStarted}
        />
      )}
    </>
  );
}
