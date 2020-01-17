import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      {name:"noopur", age:"25"},
      {name:"ketki", age:"20"},
  ],
  otherstate: "Some random value ",
  showPersons: false
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

  onchangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value, age:"25"
        },
        {
          name:"ketki", age:"20"
        }
      ]
    })
  }

  togglePersonHandler = () => {
    const currentState=this.state.showPersons
    this.setState({
      showPersons: !currentState 
    })
  }

  render() {

    const stylebutton={
      color: "blue",
      font:"inherit",
      border:"1px solid blue",
      cursor:"pointer"
    }

    let persons = null;

    if(this.state.showPersons){
       persons = (<div className="Persons">
          
          {/* <button style={stylebutton} onClick={this.switchHandler.bind(this, "Noop")}>Click me</button> */}
          {/* <button onClick={() => this.switchHandler("Noop")}>Click me</button> //Not recommended way */}
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchHandler.bind(this, "Pooja")} onChangeHandler={this.onchangeHandler}>Hobbie: Cycling</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       </div> )
    }

    return (
      <div className="App">
        <h2>Burger App</h2>
          <p>Hello people</p>
          <button style={stylebutton} onClick={this.togglePersonHandler}>click me</button>
          {persons}
      
       
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