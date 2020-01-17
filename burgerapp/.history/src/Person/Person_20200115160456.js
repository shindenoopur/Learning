import React from "react"
// import "./Person.css"
// import Radium from "radium"
import styled from "styled-components"

const StyledDiv = styled.div`
width:60%;
margin:auto;
box-shadow: 0 2px 3px #ccc;
border: 1px solid #eee;
text-align:center
color:green

@media (minWidth: 500px){
    width:400px;

}`    

const person = (props) => {   //stateless component as noi state changes done here

    // const adjustWidth = {
    //     '@media (min-width: 500px)': {
    //         width: "200px",
    //     }
    // }
    return(
        <StyledDiv>
        <div className="Person">
            <p onClick={props.ondeleteHandle}>I am {props.name} {props.age} {props.children} </p>
            <input type="text" value={props.name} onChange={props.onNameChange}></input>
        </div>
        </StyledDiv>)
}

export default person