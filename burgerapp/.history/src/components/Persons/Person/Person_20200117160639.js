import React, {Component} from "react"
// import "./Person.css"
// import Radium from "radium"
import styled from "styled-components"
import Aux from "../../../Hocs/Aux"
import PropTypes from "prop-types"
import AuthContext from "../../../Context/auth-context";

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

    constructor(props){
        super(props);
        this.elementToFocusRef=React.createRef()
    }

    componentDidMount(){
        // this.elementToFocus.focus()
        this.elementToFocusRef.current.focus()
    }

    render(){
        console.log("Person js render");
        return(
            // <StyledDiv>
            // <div className="Person">
            
            <Aux>
                <AuthContext.Consumer>
               {this.props.isAuth ? <p>Authenticated</p>: <p>Please Log in</p>}
                <p onClick={this.props.ondeleteHandle}>I am {this.props.name} {this.props.age} {this.props.children} </p>
                {/* <input ref={(inputDemo)=>{this.elementToFocus = inputDemo}} type="text" value={this.props.name} onChange={this.props.onNameChange}></input> */}
                <input ref={this.elementToFocusRef} type="text" value={this.props.name} onChange={this.props.onNameChange}></input>
                </AuthContext.Consumer>
            </Aux>
            // </div>
            // </StyledDiv>
        )
    }
}

Person.propTypes={
    //propname: value type
    ondeleteHandle: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,

}
export default Person