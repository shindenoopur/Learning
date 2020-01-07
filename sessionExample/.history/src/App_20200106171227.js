import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


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
    console.log("values to be updated", value)
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
          return ({
            ...item,
            // editing: !item.editing
          })
        }
        return item;
      })
    });
  }



  handlesubmit =  (character) => {
    
    localStorage.setItem('username', character.username);
    this.setState({
      characters: [...this.state.characters, character],
      editing:false,
    });
    var storedVar =  localStorage.getItem('user')
 console.log("stored var", storedVar)
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

componentDidMount() {
 
}

  render() {
    
    /*Using state */
    var uname = ''
    const { characters } = this.state
    characters.map((row) => {
      uname = row.username
    })

    return (
      

      <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/about"  activeStyle={{ color:'blue' }}>Registration</NavLink>
          </li>
          <li>
            <NavLink to={`/viewusers/${uname}`} activeStyle={{color:'blue'}}>Users</NavLink>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/about">
            <Form handleupdate={this.handleupdate} handlesubmit={this.handlesubmit} editing={this.state.editing} changedValue={this.state.changedValue}/>
          </Route>
          <Route path='/viewusers/'>
          
            <Table userLogin={uname} characterSet={characters} removeData={this.removedata} editing={this.state.editing} editData={this.editdata} /> 
          </Route>

          
         
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App