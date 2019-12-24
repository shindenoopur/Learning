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
      submitForm = (event) => {

        event.preventDefault();
        this.props.handlesubmit(this.state)
        this.setState(this.initialState)
      }

    render(){
        const{username, email, password} = this.state;
        return(
            <form handlesubmit={this.handlesubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.changeDetails} placeholder="Enter your name" />
                <label>Job</label>
                <input type="text" name="job" value={job} onChange={this.changeDetails} placeholder="Enter your job post" />
                <button type="submit" value="submit" onClick={this.submitForm}>Submit</button>
            </form>



            <form handlesubmit={this.handlesubmit}>
               <div className="input-group">
          <label htmlFor="username">Username</label> 
          <input type="text" className="login-input" value={username} name="username" placeholder="userName"/>
        {/* <small className="danger-error">{usernameErr ? usernameErr : ""}</small> */}
        </div> 
        <div className="input-group">
          <label htmlFor="email">Email</label> 
          <input type="email" className="login-input" value={email} name="email" placeholder="enter email"/>
        {/* <small className="danger-error">{emailErr ? emailErr : ""}</small> */}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label> 
          <input type="password" className="login-input" value={password} name="password" placeholder="password" />
        {/* <small className="danger-error">{passwordErr ? passwordErr : ""}</small> */}
        </div>

      <button type="submit" className="login-input" onClick={this.submitForm}>Register</button>
            </form>
            )
    }

}

export default Form
