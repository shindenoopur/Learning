import React, { Component } from 'react';
import './App.css';
import Char from "./Char/Char"
import Validation from "./ValidationComponent/Validation"
import Person from "./Person/Person"
import person from './Person/Person';

class App extends Component {
  
  state={
    userinput:""
  }
  
  inputChangeHandler = (event) => {
    this.setState({
      userinput:event.target.value,
    })
  }

  render(){
    return(
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userinput} />
          <p>User input is{this.state.userinput}</p>
          <Validation textLength={this.state.userinput.length}/>
      </div>
    )
  }
}

export default App;
