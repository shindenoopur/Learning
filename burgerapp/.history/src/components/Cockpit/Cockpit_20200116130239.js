import React from "react"
import styled from "styled-components"
import './Cockpit.css'

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
    
    if(props.persons.length<=2){
      classes.push("twoRows");
    }

    if(props.persons.length<=1){
      classes.push("oneRow");
    }

    return(
        <div>
             <h2>Burger App</h2>
            <p className={classes.join(" ")}>Color changes according to the number of rows visible</p>
            <StyledButton conditionChange={tprops.showPersons} onClick={this.togglePersonHandler}>click me</StyledButton>
        </div>
    );
};