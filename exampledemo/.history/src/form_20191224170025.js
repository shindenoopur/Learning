import React, {Component} from 'react' 

class Form extends Component{
    constructor(props){
        super(props)
       this.initialState = {
            username: '',
            email: '',
            password:'',
            errors: [],
            
        };

        this.state = this.initialState;
    }

    onemailChange(e){
        console.log("In")
        this.setState({email: e.target.value})
        this.clearValidationError("email")
      }


    changeDetails = (event) => {
        let errors = {};
        let formIsValid = true;
        const {name,value} = event.target;
        console.log("name and value", value)
        if(this.state.name === "username" && this.sta){
            // console.log("User name not filled")
            // this.showValidationError("username", "Username cannot be empty")
          }
        this.setState({
            [name]: value
        });
    }
    

    submitForm = (event) => {

        event.preventDefault();
        this.props.handlesubmit(this.state)
        this.setState(this.initialState)
      }

    render(){
        let usernameErr = null
        const{username, email, password, errors} = this.state;
        return(
            <form handlesubmit={this.handlesubmit}>
                <label>UserName</label>
                <input type="text" name="username" value={username} onChange={this.changeDetails} placeholder="Enter your username" />
                // <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={this.changeDetails} placeholder="Enter your mail ID" />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={this.changeDetails} placeholder="Enter your password" />
                <button type="submit" value="submit" onClick={this.submitForm}>Submit</button>
            </form>
            )
    }

}

export default Form
