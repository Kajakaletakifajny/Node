import React from "react";
import ReactDOM from "react-dom/client";

function Welcome(props) {
  return (
    <div>
      <h1>Czesc, {props.name}</h1>
      <h1>masz lat: {props.age}</h1>
    </div>
  );
}

function SecondApp() {
  return (
    <div>
      <Welcome name="Sara" age="20" />
      <Welcome name="Cahal" age="15" />
      <Welcome name="Edite" age="10" />
    </div>
  );
}

const secondElement = SecondApp;
const names = ReactDOM.createRoot(document.getElementById("names"));
names.render(secondElement);

export default SecondApp;
