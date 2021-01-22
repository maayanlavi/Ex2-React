import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Delivery from './Components/Delivery';
import Deliveries from './Components/Deliveries';
//import Form from './Components/Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Deliveries/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
