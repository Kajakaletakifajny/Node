import ReactDOM from "react-dom/client";
import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Woda będzie się gotować</p>;
  }
  return <p>Woda nie będzie się gotować.</p>;
}

export default BoilingVerdict;
