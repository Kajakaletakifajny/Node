import React from "react";
import ReactDOM from "react-dom/client";

class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "kokosowy" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Twój ulubiony smak to: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Wybierz swój ulubiony smak:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grejpfrutowy">Grejpfrutowy</option>
            <option value="limonkowy">Limonkowy</option>
            <option value="kokosowy">Kokosowy</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

export default FormSelect;
