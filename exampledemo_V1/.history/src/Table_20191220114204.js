import React, { Component } from 'react'


const tableHeader  = () => {
    <thead>
        <tr>
            <td>Name</td>
            <td>Address</td>
        </tr>
    </thead>
}

class Table extends Component {

    
  render() {
      
    return (
        <tableHeader />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
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
      </table>
    )
  }
}

export default Table