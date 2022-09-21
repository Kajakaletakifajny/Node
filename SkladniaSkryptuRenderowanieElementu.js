import React from "react";
import ReactDOM from "react-dom/client";
import "./SkladniaSkryptuRenderowanieElementu.css";
import image from "./image.jpg";

function Skladnia() {
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  function getGreeting(user) {
    if (user) {
      return <h1>Witaj, {formatName(user)}!</h1>;
    }
    return <h1>Witaj, nieznajomy.</h1>;
  }

  const user = {
    firstName: "Grzegorz",
    lastName: "Brzęczyszczykiewicz",
    avatarUrl: image,
  }; //przygotowanie do wstrzykniecia

  const elementEmbed = (
    <div>
      <h1>Witaj!</h1>
      <h2>Dobrze cię widzieć.</h2>
    </div>
  );

  const element = (
    <div>
      {getGreeting(user)}
      <img src={user.avatarUrl}></img>
    </div>
  ); //co chcemy wstrzykiwac

  const root = ReactDOM.createRoot(document.getElementById("item"));

  root.render(element); //wstrzykujemy

  const rootEmbed = ReactDOM.createRoot(document.getElementById("item-embend"));

  rootEmbed.render(elementEmbed);
}

// JSX to string prawidlowo interpretujacy znaczniki html oraz wyrazenia jsx
// ujete w nawiasach klamrowych
// JSX wystepuje tylko w elemencie ktory mamy renderowac
// pozostaly kod w skrypcie to JS

// Note: this structure is simplified
// To jest obiekt zwany elementm reactowym - w ten sposob react obsluguje wezly swojego wirtualnego drzewa DOM
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Witaj, świecie'
//   }
// };

export default Skladnia;
