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
    return (
        <table>
        <TableHeader />
        <TableBody />
        </table>
    )
  }
}

export default Table