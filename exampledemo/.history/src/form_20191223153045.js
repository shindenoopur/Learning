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

            )
    }

}

export default Form
