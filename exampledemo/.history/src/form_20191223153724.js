import React, {Component} from 'react' 

class Form extends Component{
    constructor(props){
        super(props)
       this.initialState = {
            name: '',
            job: ''
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
        const{name, job} = this.state;
        return(
            <form handlesubmit={this.handlesubmit}>
                <label>UserName</label>
                <input type="text" name="username" value={uname} onChange={this.changeDetails} placeholder="Enter your name" />
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={this.changeDetails} placeholder="Enter your job post" />
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={this.changeDetails} placeholder="Enter your job post" />
                <button type="submit" value="submit" onClick={this.submitForm}>Submit</button>
            </form>
            )
    }

}

export default Form
