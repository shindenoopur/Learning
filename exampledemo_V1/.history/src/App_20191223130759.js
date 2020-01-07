import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"
import "./App.css"

class App extends Component {

  constructor(props){
    super(props),
    
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      characters:[]}
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
        <h1>Hello, Welcome to react JS!</h1>
       <Table characterSet = {characters} />  
       <Table characterSet={characters} removeData={this.removedata}/> 
       <Form handlesubmit={this.handlesubmit} />
          
    )
  }

}

export default App