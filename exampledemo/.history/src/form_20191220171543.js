import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props),
        this.state = {
            name: '',
            job: ''
        }
    }


    changeDetails = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]: value
        });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handlesubmit(this.state);
        this.setState(this.initialState);
    }

    handleSubmmit = (userArray) => {
        this.setState({characters: [...this.state.characters, userArray]})
    }

    submitForm = () => {
        this.props.handlesubmit(this.state)
        this.setState(this.initialState)
      }

    render(){
        const{name, job} = this.state;
        return(
            <form handlesubmit={this.handleSubmmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.changeDetails} placeholder="Enter your name" />
                <label>Job</label>
                <input type="text" name="job" value={job} onChange={this.changeDetails} placeholder="Enter your job post" />
                <button type="submit" value="submit" onClick={this.submitForm}></button>
            </form>
            )
    }

}

export default Form
