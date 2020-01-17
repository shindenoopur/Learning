import React from "react"

const person = (props) => {   //stateless component
    return(
<p>I am {props.name} {props.age} {props.children}</p>
    )
}

export default person