import React from "react";
import "./App.css";
import { PlayerProvider } from "./Contaxt";
import Container from "./container/Container";
function App() {
  return (
    <PlayerProvider>
      <div className="App">
        <Container />
      </div>
    </PlayerProvider>
  );
}

export default App;
