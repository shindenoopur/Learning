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

    handleSubmmit = (userArray) => {
        this.setState({characters: [...this.state.characters, userArray]})
    }

    render(){
        const{name, job} = this.state;
        return(
            <form handleSubmit={this.handleSubmmit}>
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
