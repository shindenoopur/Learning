import React, {Component} from "react"
// import "./Person.css"
// import Radium from "radium"
import styled from "styled-components"
import Aux from '../../../Hocs/Aux'

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
        console.log("Person js render");
        return[
            // <StyledDiv>
            // <div className="Person">
            <Aux>
                <p key={"key1"} onClick={this.props.ondeleteHandle}>I am {this.props.name} {this.props.age} {this.props.children} </p>,
                <input key={"key2"} type="text" value={this.props.name} onChange={this.props.onNameChange}></input>
            </Aux>
            /* // </div>
            // </StyledDiv>
        ]; }*/
    }}
}


export default Person