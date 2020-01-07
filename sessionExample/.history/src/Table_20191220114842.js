import React, { Component } from 'react'


const TableHeader  = () => {
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>
}


const TableBody = () => {
    <tbody>
    <tr>
      <td>Charlie</td>
      <td>Janitor</td>
    </tr>
    <tr>
      <td>Mac</td>
      <td>Bouncer</td>
    </tr>
    <tr>
      <td>Dee</td>
      <td>Aspiring actress</td>
    </tr>
    <tr>
      <td>Dennis</td>
      <td>Bartender</td>
    </tr>
  </tbody>
}

class Table extends Component {

    
  render() {
      
    return (
        <table>
        <tableHeader />
        <tableBody />
        </table>
    )
  }
}

export default Table