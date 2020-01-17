import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Burger App</h2>
          <p>Hello people</p>
          <Person />
        </div>
      </div>
    );
  }
}

export default App;
