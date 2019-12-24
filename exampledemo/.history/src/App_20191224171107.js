import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"

class App extends Component {

  constructor(props){
    super(props),
    
    this.state = {
      characters:[],
      username:''
    }
  } 
  showValidationError(element, msg){
    this.setState((prevState) => ({
      errors: [...prevState.errors, {element, msg}]
    }))
  }
  removedata = index => {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      }),
    })
  }

  handlesubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}

  render() {
    
    /*Using state */
    const { characters } = this.state


    return (
      <div className="App">
        <h1>Hello, Welcome to react JS1!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
       <Table characterSet={characters} removeData={this.removedata}/> 
       <Form handlesubmit={this.handlesubmit} />
      </div>
    )
  }
}

export default App