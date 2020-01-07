import React, { Component } from 'react';

class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {items:[], text:''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      count=0
    }

    handleSubmit(e){
      const newItem = {
        text:this.state.text,
        id: count,
        count++,
      }
    }

    render(){
      return(
        <div>
          <h3>List</h3>
          <ToDoList item={this.state.items}></ToDoList>
          <form onSubmit={this.handleSubmit}>
            <label>Enter Elements to add</label>
            <input type="text" value={this.state.text} onChange={this.handleChange}></input>
            <button>Add</button>
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