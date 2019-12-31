import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"


class App extends Component {

  constructor(props){
    super(props),
    
    this.state = {
      editing: false,
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
    this.state.editing = true,
    this.setState({
      items: this.state.characters.map((item, itemIndex) => {
        if (itemIndex === index) {
          console.log("newchar", this.editing, item);
          return {
            ...item,
            // editing: !item.editing
          }
        }
        return item;
      })
    });
    // const char = this.state.characters;
    // const newChar = char.map((movie, i) => {//HERE is EDIT
    //     if (i !== index) {
    //       console.log("If",i,"",index)
    //         return char;
    //     }
    //     return value;
    // });

    
    // console.log("old", char)    
    // this.setState({ char: newChar });
  }
 
  handlesubmit = character => {
    this.setState({
      characters: [...this.state.characters, character],
      editing:false
    });
}

  render() {
    
    /*Using state */
    const { characters } = this.state
    return (
      <div className="App container">
        <h1>Hello, Welcome to react JS1!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
      
       <Form handlesubmit={this.handlesubmit} editing={this.state.editing}/>
       
      
       <Table characterSet={characters} removeData={this.removedata} editData={this.editdata} /> 

      </div>
    )
  }
}

export default App