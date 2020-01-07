import React, { Component } from 'react'


const TableHeader  = () => {
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>
    )
}


const TableBody = () => {
    return(
    <tbody />
   )
}

class Table extends Component {
        
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
        <table>
        <TableHeader />
        <TableBody />
        </table>
    )
  }
}

export default Table