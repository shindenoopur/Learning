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

  switchHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age:"25"
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
        <div className="">
          <h2>Burger App</h2>
          <p>Hello people</p>
          {/* <button onClick={this.switchHandler.bind(this, "Noop")}>Click me</button> */}
          <button onClick={() => this.switchHandler("qqNoop")}>Click me</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchHandler.bind(this, "Pooja")}>Hobbie: Cycling</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        </div>
      </div>
    );
  }
}

export default App;

/*React Hook
const App = (props) => {

    const [personState, changeState] = useState({  //returns 2 elements(present change, function oto change state)
      persons: [
        {name:"noopur", age:"25"},
        {name:"ketki", age:"20"},
      ],
      otherstate: "Demo Value"
    })

    const [otherstate, updateOtherState] = useState("Hello")

    const switchHandler = () => {
      changeState({
        persons: [
          {
            name:"Noop", age:"25"
          },
          {
            name:"ketki", age:"20"
          }
        ]
      })
    } 
    console.log("personstate", personState, otherstate)
    return (
      <div className="App">
        <div className="">
          <h2>Burger App</h2>
          <p>Hello people</p>
          <button onClick={switchHandler}>Click me</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age} >Hobbie jj</Person>
          <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        </div>
      </div>
    );
  
} */