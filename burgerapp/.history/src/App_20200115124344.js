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
      userinput:event.target.value,
    })
  }

  render(){
    return(
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userinput} />
      </div>
    )
  }
}

export default App;
