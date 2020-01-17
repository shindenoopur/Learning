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

/*Deletig a person entry on clicking on tha entry */

  // switchHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName, age:"25"
  //       },
  //       {
  //         name:"ketki", age:"20"
  //       }
  //     ]
  //   })
  // } 

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
       persons = (
       
       <div className="Persons">
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
          {/* <button style={stylebutton} onClick={this.switchHandler.bind(this, "Noop")}>Click me</button> */}
          {/* <button onClick={() => this.switchHandler("Noop")}>Click me</button> //Not recommended way */}
        
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