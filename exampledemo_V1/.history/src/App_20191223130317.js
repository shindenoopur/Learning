import React, { Component } from 'react'

import Table from './Table'
import Form from "./form"

class App extends Component {

  constructor(props){
    super(props),
    
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      characters:[]}
  } 

  removedata = index => {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      }),
    })
  }

  handlesubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}

  render() {
    
    /*Using state */
    const { characters } = this.state


    return (
      <div className="App">
        <h1>Hello, Welcome to react JS!</h1>
       {/* <Table characterSet = {characters} />   Passing variable to Table component*/}
       <Table characterSet={characters} removeData={this.removedata}/> 
       <Form handlesubmit={this.handlesubmit} />
      </div>
    )
  }
}

class LoginBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:null
    };
  }

  submitLogin(e){
    alert("In SumbitLogin"),
    e.preventDefault();
    let uname = this.refs.username.value;
    console.log(uname);
    this.signIn(uname).bind(this)
  }

  render(){
    return(
      <div className="root-container">

        <div className="box-controller" >
          <div className={"controller " + (this.state.isLoginOpen
            ? "selected-controller"
            : "")}  onClick={this.showLoginBox.bind(this)}>
            Login
          </div>
          {/* <div className={"controller " + (this.state.isRegisterOpen
            ? "selected-controller"
            : "")} onClick={this.showRegisterBox.bind(this)}>
            Register
          </div> */}
        </div>
        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {/* {this.state.isRegisterOpen && <RegisterBox />} */}
        </div>
            </div>
      /* </div>
    <div className="inner-container">
      <div className="box-header">
        Login
      </div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Username</label> 
          <input type="text" className="login-input" ref="username" name="username" placeholder="userName" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label> 
          <input type="password" className="login-input" name="password" placeholder="password" />
        </div>
      <button type="button" className="login-input" onClick={this.submitLogin.bind(this)}>Login</button>   
      </div>
    </div> */
    );
  }
}

export default App