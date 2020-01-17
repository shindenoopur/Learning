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

  deleteCharHandler=(index)=>{
    const inputchar = this.state.userinput.split("");
    inputchar.splice(index,1);
    const updatedText=inputchar.join(""),
    this.setState({
      userinput: inputchar
    })
  }

  render(){
    const char=this.state.userinput.split('').map((ch, index) => {
      return  <Char 
      character={ch} 
      key={index}
      deleteClicked={()=>this.deleteClicked(index)}/>
    })
    return(
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userinput} />
          <p>User input is{this.state.userinput}</p>
          <Validation textLength={this.state.userinput.length}/>
          {char}
      </div>
    )
  }
}

export default App;
