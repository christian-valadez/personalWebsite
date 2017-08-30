import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './containers/Info'

class App extends Component {

  constructor (props){
    super(props)
    this.state =
      {
        title: "Stanford",
        position: "BS in Computer Science, Artificial Intelligence track",
        date: "Sep. 2014 - Jun. 2018"
      }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

      <Info
        title="Education"
        listItems={this.state}
      />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Editing now.
        </p>
        <button type="button" className="btn btn-danger">Left</button>
      </div>
    );
  }
}

export default App;
