import React from "react";
import './Modal.css'

const modal=(props)=>{
    <div className="Modal">
       Hello {props.children}
    </div>
}

export default modal