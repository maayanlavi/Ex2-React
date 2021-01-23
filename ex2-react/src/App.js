import React, { Component } from 'react';
import car from './mobel.svg';
import view from './Scene.svg';
import './App.css';
import Deliveries from './Components/Deliveries';

class App extends Component {


  carStyle = {
    width: '50%',
    height: '395px', 
    position: "absolute",
    left: "0%",
    right: "49.44%",
    top: "79.38%",
  
  }

  layoutStyle ={
    position: 'absolute',
    background: '#FFFFFF',
    backgroundImage:`url(${view})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    marginTop:'0%',
    width: '100%',
    height: '800px',
    
  }
  render() {
    return (
      <div className="layout" style={this.layoutStyle}>
        <Deliveries/>
        <img src={car} style={this.carStyle} alt="car"/>
      </div>
      
      

);
  }
}

export default App;
