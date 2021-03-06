import React from "react"
import styled from "styled-components"

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

const cockpit=(props)=>{
    return(
        <div>
             <h2>Burger App</h2>
            <p className={classes.join(" ")}>Color changes according to the number of rows visible</p>
            <StyledButton conditionChange={this.state.showPersons} onClick={this.togglePersonHandler}>click me</StyledButton>
        </div>
    );
};