import React, { use, useState } from 'react';
import './App.css';

import Person from "./Person/Person"

const App = (props) => {

    const [personState, changeState] = useState({  //returns 2 elements(present change, function oto change state)
      persons: [
        {name:"noopur", age:"25"},
        {name:"ketki", age:"20"},
      ],
    })

    return (
      <div className="App">
        <div className="">
          <h2>Burger App</h2>
          <p>Hello people</p>
          <button onClick={this.switchHandler}>Click me</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age} >Hobbie jj</Person>
          <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        </div>
      </div>
    );
  
}

export default App;


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
        name:"Noop", age:"25"
      },
      {
        name:"ketki", age:"20"
      }
    ]
  })
} 