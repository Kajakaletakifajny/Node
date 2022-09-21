import React from 'react';
import ReactDOM from 'react-dom/client';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
    };
  
    handleClick=() =>{
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
        </button>
      );
    }
  }

  export default Toggle;
