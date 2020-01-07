import React, { Component } from 'react';

class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {items:[]}
    }
}

class ToDoList extends React.Component{
  render(){
    return(
      <div>
        <ul>
          {this.props.items.map(item => (
            
          )}
        </ul>
      </div>
    )
  }
}

export default App