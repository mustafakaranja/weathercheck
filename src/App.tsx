import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { CardsComponent } from "./Components/Cards.component";
import ServiceMain from "./serviceMain";

function App() {
  console.log("Weather Forcast API", ServiceMain);
  return (
    <div className="App">
      <Header />
      <CardsComponent />
    </div>
  );
}

export default App;
