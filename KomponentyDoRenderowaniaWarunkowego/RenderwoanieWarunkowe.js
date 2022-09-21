import React from 'react';
import ReactDOM from 'react-dom/client';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  const register = ReactDOM.createRoot(document.getElementById('register')); 
  register.render(Greeting);

  export default Greeting;