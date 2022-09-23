import ReactDOM from "react-dom/client";
import React from "react";

class TemperatureInput extends React.Component {

  handleChange=(event)=> {
    this.props.onTemperatureChange(event.target.value);
  }


  render() {
    const scaleNames = {
      c: "Celsius",
      f: 'Fahrenheit'
    };
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Podaj temperaturę w {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
