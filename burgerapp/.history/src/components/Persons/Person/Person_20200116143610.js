import React, {Component} from "react"
// import "./Person.css"
// import Radium from "radium"
import styled from "styled-components"

const StyledDiv = styled.div`
width:60%;
margin:auto;
box-shadow: 0 2px 3px #ccc;
border: 1px solid #000;
text-align:center

@media (minWidth: 500px){
    width:400px;

}`    


class Person extends Component{
    render(){
        return(
            <StyledDiv>
            <div className="Person">
                <p onClick={this.props.ondeleteHandle}>I am {this.props.name} {this.props.age} {this.props.children} </p>
                <input type="text" value={this.props.name} onChange={this.props.onNameChange}></input>
            </div>
            </StyledDiv>
        )
    }
}


export default Person