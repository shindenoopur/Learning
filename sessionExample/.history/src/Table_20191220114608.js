import React, { Component } from 'react'


class Table extends Component {

    
  render() {
      

const tableHeader  = () => {
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>
}


const tableBody = () => {
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
    return (
        <table>
        <tableHeader />
        <tableBody />
        </table>
    )
  }
}

export default Table