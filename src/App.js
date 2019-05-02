import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      slideState: false
    }
  }



  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header-top">
            <h2 className="title">Start Bootstrap</h2>
            <div className="nav-holder">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
            <div onClick={() => this.setState({ slideState : !this.state.slideState})} className="ham">|||menu</div>
            <div className={this.state.slideState ?'drop-down slide' :'drop-down'}>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
          </div>

          <div className="header-bottom">
            <div className="welcome">
              <h1>Welcome to Our Studio!</h1>
            </div>
            <div className="meet">
              <h1>IT'S NICE TO MEET YOU</h1>
            </div>
            <button className="tell">TELL ME MORE</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
