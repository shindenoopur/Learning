import React, { Component } from 'react'


const tableHeader  = () => {
    <thead>
        <tr>
            <td>Name</td>
            <td>Address</td>
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

class Table extends Component {

    
  render() {
      
    return (
        <tableHeader />
        <tableBody />
    )
  }
}

export default Table