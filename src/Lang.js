import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";
import Colour from './Colour'
function App() {
  return (
    <div>
    <Colour/>
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
    </div>
  );
}

export default App;
