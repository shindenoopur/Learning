import React from "react"
import "./BuildControl.css"

const BuildControl=(props)=>(
    <div>
        <div>{props.label}</div>
        <button>Remove</button>
        <button>Add</button>
    </div>

);

export default BuildControl;
