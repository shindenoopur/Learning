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

    const {characterSet} = this.props;  //Receives properties or data sent by parent component

    return (
        <table>
        <TableHeader />
        <TableBody characterData={characterSet} />
        </table>
    )
  }
}

export default Table