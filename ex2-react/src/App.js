import React, { Component } from 'react';
import car from './mobel.svg';
import view from './Scene.svg';
import './App.css';
import Deliveries from './Components/Deliveries';

class App extends Component {

  appStyle ={
    backgroundImage:`url(${view})`,
    backgroundPosition: 'top',
    backgroundSize: '90% 80%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',

  }

  carStyle = {
    width: '50%',
    height: '395px', 
    position: "absolute",
    left: "0%",
    right: "49.44%",
    top: "79.38%",
    bottom: "0%"
  
  }

  layoutStyle ={
    position: 'absolute',
    background: '#FFFFFF',
    backgroundImage:`url(${view})`,
    backgroundRepeat: 'no-repeat',
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
