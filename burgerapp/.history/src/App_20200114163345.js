import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      {name:"noopur", age="25"},
  ]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Burger App</h2>
          <p>Hello people</p>
          <Person name="Noopur" age="28">Hobbie jj</Person>
          <Person name="Ketki" age="24"/>
        </div>
      </div>
    );
  }
}

export default App;
