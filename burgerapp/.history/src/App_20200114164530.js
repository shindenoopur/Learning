import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      {name:"noopur", age:"25"},
      {name:"ketki", age:"20"},
  ]
  }

  switchHandler = () => {
    this.setState({
      persons: [
        {
          name:"Noop", age="25"
        },
        {
          name:"ketki", age:"20"
        }
      ]
    })
  } 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Burger App</h2>
          <p>Hello people</p>
          <button onClick={this.switchHandler}>Click me</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Hobbie jj</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        </div>
      </div>
    );
  }
}

export default App;
