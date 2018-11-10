import React, { Component } from 'react';
import headerImage from './images/header.png';
import './App.css';
import {BrowserRouter,Route,Link}from 'react-router-dom'
import brand1 from './images/ticketmaster.png'
import brand2 from './images/flour.png'
import brand3 from './images/nationalg.png'
import brand4 from './images/steam.png'
import brand5 from './images/wordpress.png'

class App extends Component {
	constructor(){
		super()
		this.state={
			toggle:false,
			visible:false
		}
	}
	screenSize=()=>{
		var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight|| e.clientHeight|| g.clientHeight;
		alert(x + ' × ' + y);
	}
	toggle=()=>{
		this.setState({
			toggle:true,
		})
		setTimeout(()=>this.changeToggle(), 400);
	  }
	changeToggle(){
		this.setState({
			toggle:false,
			visible:!this.state.visible
		})
	}
  render() {
    return (
		<BrowserRouter>
			<div className="wrapper">
			<header className="header">
				<div className="navbar">

				<h1 className="navbar-logo "><a href="#">Krake</a></h1>
				<div className="">
					<ul className={this.state.visible?"navbar-container-toggle":"navbar-container"}>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/Account">Account</Link></li>
						<li><Link to="/">Features</Link></li>
						<li><Link to="/">Developers</Link></li>
						<li><Link to="/">Pricing</Link></li>
						<li><Link to="/">Support</Link></li>
					</ul>
				</div>
				<button onClick={this.screenSize} className="download-btn">Download</button>
				<div className={this.state.toggle?"icon-flip navbar-toggle":"navbar-toggle"}>
					<button onClick={this.toggle} 
					class="material-icons hamburger">{this.state.visible?"clear":"menu"}</button>
				</div>
				</div>         
				<div className={this.state.visible?"promotion-hide":"promotion"}>
					<div className="promotion-image-container">
						<img  id="promotion-image" src={headerImage}/>
						<div id="promotion-image-shadow"></div>
					</div>
					<div className="promotion-container">
						<p id="promotion-title">Choose the best pricing that fits your needs</p>
						<p id="promotion-paragraph">The best services you can get with just one click, with a top enterprice company in Costa Rica</p>
						<button onClick={this.screenSize} id="promotion-button">Get Started</button>
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
			<div className="pricing-container">
				<div className="pricing-item pricing1">
						<div className="pricing-text">
							<p>Free</p>
							<p>0$</p>
							<p>Enjoy the best part of free services</p>
						</div>
						<button className="pricing-btn p1-btn">Get Started</button>
				</div>
				<div className="pricing-item pricing2">
					<div className="pricing-text">
						<p>Standard</p>
						<p>10$</p>
						<p>Free handling of the clients and managment</p>
					</div>
					<button className="pricing-btn p2-btn">Get Started</button>
				</div>
				<div className="pricing-item pricing3 ">
					<div className="pricing-text">
						<p>Premium</p>
						<p>100$</p>
						<p>Premium members disccounts and free help</p>
					</div>
					<button className="pricing-btn p3-btn">Get Started</button>
				</div>
			</div>
			</body>
		</div>
	</BrowserRouter>	
    );
  }
}

export default App;
