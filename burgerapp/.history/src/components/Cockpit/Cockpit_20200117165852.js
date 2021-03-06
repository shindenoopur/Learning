import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import './Cockpit.css'
import AuthContext from "../../Context/auth-context"

const StyledButton = styled.button`
background-color: ${props => props.conditionChange ? "red" : "green"};
color: white;
font:inherit;
border:1px solid black;
cursor:pointer;
&:hover {
  background-color:${props => props.conditionChange ? "salmon" : "lightgreen"};;
  color: black
`

const Cockpit=(props)=>{

    const classes = [];
    const togglePersonRef=useRef(null); //null set as initial value useRef: used to create reference for functional components

    useEffect(()=>{
      console.log("useEffect() in Cockpit.js")
      
    togglePersonRef.current.click()
    },[]) //[] sot that useEffect executes after component gets rendered for first time
    
    if(props.persons.length<=2){
      classes.push("twoRows");
    }

    if(props.persons.length<=1){
      classes.push("oneRow");
    }
    console.log("props.tilte", props.title)
    return(
      
        <div>
             <h2>{props.title} App</h2>
            <p className={classes.join(" ")}>Color changes according to the number of rows visible</p>
            <StyledButton conditionChange={props.showPersons} ref={togglePersonRef} onClick={props.togglePersonHandlerCockpit}>click me</StyledButton>
            <AuthContext.Consumer>{context=> <StyledButton onClick={context.login}>Login</StyledButton>}</AuthContext.Consumer>
        </div>
    );
};

export default Cockpit