import React, { Component } from 'react'

import Table from './Table'

class App extends Component {
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
        { <Table characterSet = {characters}/>   /*Passing variable to Table component */}
      </div>
    )
  }
}

export default App