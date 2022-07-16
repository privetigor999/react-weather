import React from "react";
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import "./index.css";

const cities = [
  {
    id: 1,
    city: "Moscow",
  },
  {
    id: 2,
    city: "Berlin",
  },
];

function App() {
  const [currentCity, setCurrentCity] = React.useState("Moscow");

  return (
    <div className="app">
      <div className="wrapper">
        {/* для APi */}
        <Header cities={cities} />
        <MainBlock currentCity={currentCity} />
      </div>
    </div>
  );
}

export default App;
