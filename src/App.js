import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar} from "react-bootstrap";
const navbarInstance = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">react-bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
);

class App extends Component {
  render() {
    return (
      <div className="App">
      {navbarInstance}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
