import React, {Component} from 'react' 

class Form extends Component{
    constructor(props){
        super(props)
       this.initialState = {
            username: '',
            email: '',
            password:''
        };

        this.state = this.initialState;
    }

    submitForm = (event) => {

        event.preventDefault();
        this.props.handlesubmit(this.state)
        this.setState(this.initialState)
      }

    render(){
        const{username, email, password} = this.state;
        return(
            <form handlesubmit={this.handlesubmit}>
               <div className="input-group">
          <label htmlFor="username">Username</label> 
          <input type="text" className="login-input" name="username" placeholder="userName"/>
        {/* <small className="danger-error">{usernameErr ? usernameErr : ""}</small> */}
        </div> 
        <div className="input-group">
          <label htmlFor="email">Email</label> 
          <input type="email" className="login-input" name="email" placeholder="enter email"/>
        {/* <small className="danger-error">{emailErr ? emailErr : ""}</small> */}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label> 
          <input type="password" className="login-input" name="password" placeholder="password" />
        {/* <small className="danger-error">{passwordErr ? passwordErr : ""}</small> */}
        </div>

      <button type="submit" className="login-input" onClick={this.submitForm}>Register</button>
            </form>
            )
    }

}

export default Form
