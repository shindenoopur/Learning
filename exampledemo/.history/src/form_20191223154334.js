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


    changeDetails = (event) => {
        const {name,value} = event.target;
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
        const{username, email, password} = this.state;
        return(
            <form handlesubmit={this.handlesubmit}>
                <label>UserName</label>
                <input type="text" name="username" value={username} onChange={this.changeDetails} placeholder="Enter your username" />
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
