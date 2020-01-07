import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      editing: false,
      characters:[],
      username:'',
      isPresent:false,
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
    console.log("vlaues t be updated", value)
    // this.state.editing = true
    this.setState({
      editing: true,
      items: this.state.characters.map((item, itemIndex) => {
        if (itemIndex === index) {
          this.setState({
            changedValue:value
          })
          // this.state.changedValue = value;
          console.log("newchar", this.state.editing, item, value);
          return {
            ...item,
            // editing: !item.editing
          }
        }
        return item;
      })
    });
  }



  handlesubmit =  (character) => {
    
    console.log("this.state", this.state)
    this.setState({
      characters: [...this.state.characters, character],
      editing:false,
    });
}


      
  handleupdate =  (updatedState) => {
    
    console.log("this.state in App", this.state, updatedState.username)
    const index = this.state.characters.findIndex(p => p.username === this.state.changedValue)
    console.log("Index at",index)
    if(index!== -1){
    
      this.setState(prevState => {
        if(updatedState.username!=='') 
          this.state.characters[index].username = updatedState.username;
        if(updatedState.email !== '')
        this.state.characters[index].email = updatedState.email;
      });

      this.setState({
        editing:false,
      })
    }
    
}

  render() {
    
    /*Using state */
    const { characters } = this.state
    return (
      <div className="App container">
        <h1>Hello {this.state.username}, Welcome to react JS1!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
      
       <Form handleupdate={this.handleupdate} handlesubmit={this.handlesubmit} editing={this.state.editing} changedValue={this.state.changedValue}/>
       
      
       <Table characterSet={characters} removeData={this.removedata} editData={this.editdata} /> 

      </div>
    )
  }
}

export default App