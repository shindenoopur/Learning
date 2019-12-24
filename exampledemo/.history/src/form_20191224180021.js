import React, {Component} from 'react' 
import TextField from "material-ui/TextField";



class Form extends Component{
    constructor(props){
        super(props)
       this.initialState = {
            username: '',
            email: '',
            password:'',
            userNameError:"",
            emailError:"",
            passwordError:"",
            
        };

        this.state = this.initialState;
    }

    changeDetails = (event) => {
        const {name,value} = event.target;
        // console.log("Name is:", name, " Value:", value)
        // if(name === "username" && value===""){
        //     // this.showValidationError("username", "Username cannot be empty")
        //   }
        this.setState({
            [name]: value
        });
    }
 
    validateErrors = () =>  {
        let isErr = false;
        const errors={};
        if(this.state.username === ""){

            console.log("User name not filled")
            isErr = true;
            errors.userNameError = "Username should not be empty"
        }

        if(isErr){
            this.setState({
                ...this.state,
                ...errors,
            })
            return true;
        }
    }

    submitForm = (event) => {

        event.preventDefault();
        const validate = this.validateErrors();
        console.log("Validate", validate)
        /*clear form */
        if(!validate){
            this.setState(this.initialState),
            this.props.handlesubmit(this.state)
        }
      }

    render(){
        
        let usernameErr = null
        const{username, email, password, errors} = this.state;
        return(
            <form handlesubmit={this.handlesubmit}>
                <label>UserName</label>
                <TextField name="username" value={username} onChange={this.changeDetails} errorText={this.state.userNameError} placeholder="Enter your username" />
                <label>Email</label>
                <TextField name="email" value={email} onChange={this.changeDetails} errorText={this.state.emailError} placeholder="Enter your mail ID" />
                <label>Password</label>
                <TextField name="password" value={password} onChange={this.changeDetails} errorText={this.state.passwordError} placeholder="Enter your password" />
                <button type="submit" value="submit" onClick={this.submitForm}>Submit</button>
            </form>
            )
    }

}

export default Form
