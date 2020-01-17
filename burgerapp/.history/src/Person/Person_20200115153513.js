import React from "react"
import "./Person.css"
import Radium from "radium"
const person = (props) => {   //stateless component as noi state changes done here
    return(
        <div className="Person">
            <p onClick={props.ondeleteHandle}>I am {props.name} {props.age} {props.children} </p>
            <input type="text" value={props.name} onChange={props.onNameChange}></input>
        </div>)
}

export default person