import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
    var uname = 'DemoUser'
    const { characters } = this.state
    const rows = characters.map((row) => {
      uname = row.username
    })

    return (

      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
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
          <Route exact path="/">
            <Form handleupdate={this.handleupdate} handlesubmit={this.handlesubmit} editing={this.state.editing} changedValue={this.state.changedValue}/>
          </Route>
          <Route path="/users">
            <Table characterSet={characters} removeData={this.removedata} editData={this.editdata} />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>,
     
      console.log("user is:", uname)
      // <div className="App container">
      //   <h1>Hello {uname}, Welcome to react JS1!</h1>
      //  {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
      
      //  {/* <Form handleupdate={this.handleupdate} handlesubmit={this.handlesubmit} editing={this.state.editing} changedValue={this.state.changedValue}/>
       
      
      //  <Table characterSet={characters} removeData={this.removedata} editData={this.editdata} />  */}

      // </div>
    )
  }
}

export default App