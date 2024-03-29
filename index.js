import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Skladnia from './SkladniaSkryptuRenderowanieElementu';
import SecondApp from './KomponentyFunkcyjneKlasowePropy';
import Clock from './StanICyklZycia';
import Toggle from './ObslugaZdarzenKlasa';
import Greeting from './KomponentyDoRenderowaniaWarunkowego/RenderwoanieWarunkowe';
import CompForm from './KomponentFormularz';
import FormSelect from './KompFormSelect';
import FormBox from './KompFormBox';
import Calculator from './KomponentyDoCalculation/PrzekazywanieDanychCalculation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Skladnia />
    {/* <Clock /> */}
    {/* <SecondApp /> */}
    {/* <Toggle /> */}
    {/* <Greeting /> */}
    {/* <CompForm />
    <FormSelect /> */}
    {/* <FormBox /> */}
    <Calculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
