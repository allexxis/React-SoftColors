import React, { Component } from 'react';
import headerImage from './images/header.png';
import './App.css';
import brand1 from './images/ticketmaster.png'
import brand2 from './images/flour.png'
import brand3 from './images/nationalg.png'
import brand4 from './images/steam.png'
import brand5 from './images/wordpress.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container-col">
            <div className="navbar ">
              <h1 className="logo "><a href="#">Krake</a></h1>
              <ul className="container-nav ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
              </ul>
              <button id="download">Download</button>
            </div>         
            <div className="promotion container-row">
              <img className="" id="promotion-image" src={headerImage}/>
              <div className=""  id="promotion-text">
                <p id="promotion-title">Choose the best pricing that fits your needs</p>
                <p id="promotion-paragraph">The best services you can get with just one click, with a top enterprice company in Costa Rica</p>
                <button id="promotion-button">Get Started</button>
              </div>
            </div>
          </div> 
        </header>
        <body>
          <div className="brand-images">
            <img src={brand1}/>
            <img src={brand2} alt=""/>
            <img src={brand3} alt=""/>
            <img src={brand4} alt=""/>
            <img src={brand5} alt=""/>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
