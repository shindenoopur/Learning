import React, { Component } from 'react';
import './App.css';
// import Radium, {StyleRoot} from "radium"
import Person from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {

  constructor(props){
    super(props)
    console.log("appjs constructor")
    //set can be set here as well
  }

  state = {
    persons: [
      { id:"user1", name:"noopur", age:"25"},
      { id:"user2", name:"ketki", age:"20"},
      { id:"user3", name:"demouser", age:"29"},
  ],
  otherstate: "Some random value ",
  showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps Appjs")
    return state,
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
     console.log("render Appjs")
    let persons = null;

    if(this.state.showPersons){
       persons = (
       
       <div>
         <Person persons={this.state.persons} onchangeHandlerPersons={this.onchangeHandler} deleteHandlerPersons={this.deleteHandler}/>

          {/* <button style={stylebutton} onClick={this.switchHandler.bind(this, "Noop")}>Click me</button> */}
          {/* <button onClick={() => this.switchHandler("Noop")}>Click me</button> //Not recommended way */}
        
       </div> )

    }

    const classes = [];

    if(this.state.persons.length<=2){
      classes.push("twoRows");
    }


    if(this.state.persons.length<=1){
      classes.push("oneRow");
    }

    return (
     
        <div className="App">

            <Cockpit title={this.props.appTitle} 
            showPersons=
            {this.state.showPersons} 
            persons={this.state.persons} 
            togglePersonHandlerCockpit={this.togglePersonHandler}/>
            {/* <button onClick={this.togglePersonHandler}>click me</button> */}
            {persons}
        </div>
      
    );
  }
}

export default App; 

/*React Hook
const App = (props) => {

    const [personState, changeState] = useState({  //returns 2 elements(present state, function oto change state)
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