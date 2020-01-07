import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"


class App extends Component {

  constructor(props){
    super(props),
    
    this.state = {
      characters:[],
      username:'',
      isPresent:false
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

  editdata = (index, value) => {
    console.log("Index",index, value)
  }
 
  handlesubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}

  render() {
    
    /*Using state */
    const { characters } = this.state
  console.log("isprenst",this.ispresent)

    return (
      <div className="App container">
        <h1>Hello, Welcome to react JS1!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
      
       <Form handlesubmit={this.handlesubmit} />
       
      
       <Table characterSet={characters} removeData={this.removedata} editData={this.editdata}/> 

      </div>
    )
  }
}

export default App