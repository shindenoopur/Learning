import React, { Component } from 'react'

import Table from './Table'

class App extends Component {

  removeData = index => {
    const {stateDemoData} = this.state;

    this.setState({
      stateDemoData: stateDemoData.filter((character,i) =>
      return i!=index.)
    })
  }
  
  render() {
    state = [
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
    ]

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
       <Table characterSet = {characters} removedata = {removeData}/> 
      </div>
    )
  }
}

export default App