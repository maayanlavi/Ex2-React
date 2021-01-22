import React, { Component } from 'react';
import car from './mobel.svg';
import view from './Scene.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="backgroud" width="100%" height="100%">
      <img src={view} width="50%" height="50%" alt="view" />
      <img src={car} width="50%" height="50%" alt="car"/>
      </div>

);
  }
}

export default App;
