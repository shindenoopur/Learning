import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"
import person from './Person/Person';

class App extends Component {
  
  state={
    userinput:""
  }
  
  inputChangeHandler = (event) => {
    this.setState({
      userinput=event.target.value,
    })
  }

  render(){
    return(
      <div className="App">
        <input type="text" value={this.state.userinput} onChange={this.inputChangeHandler()}/>
      </div>
    )
  }
}

export default App;
