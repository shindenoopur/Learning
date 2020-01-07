import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"

class App extends Component {

  constructor(props){
    super(props),
    isLoginOpen: true,
    isRegisterOpen: false,
    characters:[]
    this.state = {characters:[]}
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
    /* using props */
    // const characters = [
    //   {
    //     name: 'Charlie',
    //     job: 'Janitor',
    //   },
    //   {
    //     name: 'Mac',
    //     job: 'Bouncer',
    //   },
    //   {
    //     name: 'Dee',
    //     job: 'Aspring actress',
    //   },
    //   {
    //     name: 'Dennis',
    //     job: 'Bartender',
    //   },
    // ]
    
    /*Using state */
    const { characters } = this.state


    return (
      <div className="App">
        <h1>Hello, Welcome to react JS!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
       <Table characterSet={characters} removeData={this.removedata}/> 
       <Form handlesubmit={this.handlesubmit} />
      </div>
    )
  }
}

export default App