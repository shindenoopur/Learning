import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:"user1", name:"noopur", age:"25"},
      { id:"user2", name:"ketki", age:"20"},
      { id:"user3", name:"demouser", age:"29"},
  ],
  otherstate: "Some random value ",
  showPersons: false
  }

  /*Deletig a person entry on clicking on that entry */
  deleteHandler = (elementIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(elementIndex, 1),
    this.setState({
      persons:persons,
    })
  }

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

  onchangeHandler = (event, id) => {
    const toChangeIndex = this.state.persons.findIndex( p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[toChangeIndex]
    
    }

    person.name= event.target.value

    const persons = [...this.state.persons];
    persons[toChangeIndex]=person

    this.setState({
      persons: persons
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
      backgroundColor:"green",
      color: "white",
      font:"inherit",
      border:"1px solid black",
      cursor:"pointer",
    }

    let persons = null;

    if(this.state.showPersons){
       persons = (
       
       <div className="Persons">
          {this.state.persons.map((person,index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            onNameChange ={(event) => {this.onchangeHandler(event, person.id)}} 
            ondeleteHandle = {() => {this.deleteHandler(index)}}/>
          })}
          {/* <button style={stylebutton} onClick={this.switchHandler.bind(this, "Noop")}>Click me</button> */}
          {/* <button onClick={() => this.switchHandler("Noop")}>Click me</button> //Not recommended way */}
        
       </div> )

       stylebutton.backgroundColor="red"
    }

    const classes = [];

    if(this.state.persons<=1){
      classes.push("oneRow");
    }
    else if(this.state.persons<=2){
      classes.push("twoRows");
    }

    return (
      <div className="App">
        <h2>Burger App</h2>
          <p className={classes.join("  ")}>Color changes according to the number of rows visible</p>
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