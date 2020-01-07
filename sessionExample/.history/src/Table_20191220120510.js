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


const TableBody = props => {
    const rows = props.characterSet.map((row,index)
    return(
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
        </tr>
        <tbody />
   )
})

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