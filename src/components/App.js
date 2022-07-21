import HomeScreen from "./HomeScreen";
import React from "react";

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
//homeScreen ? currentPage : currentPage
