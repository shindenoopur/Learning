import React, { Component } from 'react'

import Table from './Table'

class App extends Component {

  state = {characters:[
    {
      name: 'Statenames1',
      job: 'stateJob1',
    },
    {
      name: 'Statenames2',
      job: 'stateJob1',
    },
    {
      name: 'Statenames3',
      job: 'stateJob1',
    },
    {
      name: 'Statenames4',
      job: 'stateJob1',
    },
  ]}


  removedata = index => {
    const {stateDemoDatas} = this.state;

    this.setState({
      stateDemoDatas: stateDemoDatas.filter((stateDemoData,i) =>
      {return i!==index})
    })
  }



  render() {
    
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    

    return (
      <div className="App">
        <h1>Hello, React!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
       <Table characterSet = {characters} removeData = {this.removedata}/> 
      </div>
    )
  }
}

export default App