import React, {Component} from 'react' 
import './App.css'
import Table from "./Table"

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
            passwordState: null,
        };

        this.state = this.initialState;
       
    };

    updateDetails = (event) => {
        const {name,value} = event.target;
        console.log("name and value", name, "", value)
        this.setState({
            [name]: value
        });

        if(event.target.name==="password"){
            this.setState({passwordState:"weak"})
            // console.log("event.target.value.length",event.target.value.length)
            if(event.target.value.length>=8){
            this.setState({passwordState:"medium"})
            }if(event.target.value.length > 12){
            this.setState({passwordState:"strong"})
            }
        }
    }


    
    changeDetails = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]: value
        });

        if(event.target.name==="password"){
            this.setState({passwordState:"weak"})
            // console.log("event.target.value.length",event.target.value.length)
            if(event.target.value.length>=8){
            this.setState({passwordState:"medium"})
            }if(event.target.value.length > 12){
            this.setState({passwordState:"strong"})
            }
        }
    }
 
    validateErrors = () =>  {
        let isErr = false, uname="", pass="", mail="";
        const errors={
            userNameError:"",
            emailError:"",
            passwordError:"",
        };
        uname = this.state.username;
        pass= this.state.password;
        mail = this.state.email

        if(uname === "" || !uname.match(/^[a-zA-Z ]*$/)){
            isErr = true;
            errors.userNameError = "Please enter valid username. Username should consists of alphabets only."
        }
         if(mail === "" || !mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            isErr = true;
            errors.emailError = "Please enter valid email address"
        }
        // console.log("pass.length",pass.length)
         if(pass === "" || pass.length<8){
            isErr = true;
            errors.passwordError = "Password should consists of more than 8 characters"
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
        this.isPresent = true;
        event.preventDefault();
        const validate = this.validateErrors();
        if(!validate){

            /*clear form */
            this.setState(this.initialState);
            this.props.handlesubmit(this.state)
        }
      }
      
      updateForm = (event) => {
        this.isPresent = true;
        this.editing = false
        event.preventDefault();
        // const validate = this.validateErrors();

            
        // console.log("Here", validate)
        // if(!validate){
            /*clear form */
            // console.log("this.state.username",this.state.username)
            // this.setState(this.initialState),
            console.log("In updateForm ", this.state.username)
            this.setState(this.initialState);
            this.props.handleupdate(this.state.username)

        // }
      }
    render(){
      
       
     let passwordWeak=false, passwordMedium = false, passwordStrong=false;
    if(this.state.passwordState === "weak"){
      passwordWeak = true;
    }else if(this.state.passwordState === "medium"){
      passwordWeak=true;
      passwordMedium=true;
    }else if(this.state.passwordState === "strong"){passwordMedium=true;
      passwordWeak=true;
      passwordMedium = true;
      passwordStrong=true;
    }
        const{username, email, password, errors} = this.state;
    //   console.log("this.state.editing", this.props)
      this.state.updatedUser = this.props.changedValue
        if(this.props.editing === true){
            // console.log("this.state.username", this.state.username)
            return( <div className="col-md-12">
                        <form>
                            <label>UserName</label>
                            <input type="text" name="username" value={username} onChange={this.updateDetails}/>
                            <small className="danger-error">{this.state.userNameError}</small>
                            
                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={this.changeDetails} placeholder="Enter your mail ID" />
                            <small className="danger-error">{this.state.emailError}</small>
                            
                            <div className="col-md-12 registerbtnalignment">
                            <button type="submit" className="login-btn " value="submit" onClick={this.updateForm}>Save</button>
                            </div>
                        </form>
                    </div>
            )
        }
        else{   
            return(
                <div className="col-md-12">
                <form handlesubmit={this.handlesubmit}>
                    <label>UserName</label>
                    <input type="text" name="username" value={username} onChange={this.changeDetails} placeholder="Enter your username" />
                    <small className="danger-error">{this.state.userNameError}</small>
                    
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={this.changeDetails} placeholder="Enter your mail ID" />
                    <small className="danger-error">{this.state.emailError}</small>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={this.changeDetails} placeholder="Enter your password" autoComplete="off"/>
                    <small className="danger-error">{this.state.passwordError}</small>

                    {this.state.password && <div className="password-state">
                        <div className={"pwd pwd-weak " + (passwordWeak ? "show": "")}>

                        </div>
                        <div className={"pwd pwd-medium " + (passwordMedium ? "show": "")}>

                        </div>
                        <div className={"pwd pwd-strong " + (passwordStrong ? "show": "")}>

                        </div>
                        </div>}
                    <div className="col-md-12 registerbtnalignment">
                    <button type="submit" className="login-btn " value="submit" onClick={this.submitForm}>Submit</button>
                    </div>
                </form>
                </div>
                
                )
        }
        <Table />
           
    }

}

export default Form
