import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";
import Colour from './Colour'
function App() {
  return (
    <>
    <Colour/>
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
    </>
  );
}

export default App;
