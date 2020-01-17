import React from "react"

const person = (props) => {   //stateless component as noi state changes done here
    return(
<p onClick={props.click}>I am {props.name} {props.age} {props.children} </p>
    )
}

export default person