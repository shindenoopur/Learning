import React, { Component } from 'react'


const TableHeader  = () => {
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
    </thead>
    )
}

class Table extends Component {

  render() {
     

    const {characterSet, removeData, editData} = this.props;  //Receives properties or data sent by parent component
     console.log("+++++ props.userLogin", characterSet, this.props.userLogin)
    const TableBody = props => {
    const rows = props.characterData.map((row,index) => {   //map creates new array by executing the given function on every element of old array 
       
    return(
        <tr key={index}>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.password}</td>
            <td>
                <button onClick={() => props.removedata(index)}>Delete</button>
            </td> 
            <td>
                <button onClick={() => props.editData(index, row.username)}>Edit</button>
                {/* <button onClick={() => props.editData(index, row)}>Edit</button> */}
            </td>
        </tr>
    )})


     return <tbody>{rows}</tbody>
     
}   
if(props.userLogin !== "DemoUser"){
    return (
       
        <table>
        <TableHeader />
        <TableBody characterData={characterSet} removedata={removeData} editData={editData}/>
        </table>
        
    )
    }
  }
}

export default Table