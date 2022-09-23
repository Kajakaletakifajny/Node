import React from "react";
import ReactDOM from "react-dom/client";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  //! w this.setState po => jest nawias okragly dlatego aby nie pisac return

  render() {
    // let napis = "";
    // if (this.state.isToggleOn) {
    //   napis = "wlaczony";
    // } else {
    //   napis = "wylaczony";
    // }
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "WŁĄCZONY" : "WYŁĄCZONY"}
        {/* {napis} */}
      </button>
    );
  }
}

export default Toggle;
