import React from "react"

const person = (props) => {   //stateless component as noi state changes done here
    return(<div>
<p onClick={props.click}>I am {props.name} {props.age} {props.children} </p>
<input type="text" onChange={props.onChangeHandler}></input>
    </div>)
}

export default person