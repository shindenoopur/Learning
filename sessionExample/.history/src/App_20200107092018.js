import React, { Component } from 'react';

class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {items:[], text:''}
    }

    render(){
      return(
        <div>
          <h3>List</h3>
          <ToDoList item={this.state.items}></ToDoList>
          <form onSubmit={this.handleSubmit()}>
            <label>Enter Elements to add</label>
            <input type="text" value={this.state.text} onChange={this.handleChange()}></input>
          </form>
        </div>
      )
    }
}

class ToDoList extends React.Component{
  render(){
    return(
      <div>
        <ul>
          {this.props.items.map(item => (
            <li></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App