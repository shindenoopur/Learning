import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props),
        this.intialState = {
            name: '',
            job: ''
        }
        this.state = {
          
        }
    }


    changeDetails = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const{name, job} = this.state;
        return(
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={this.changeDetails} placeholder="Enter your name" />
                <label>Job</label>
                <input type="text" value={job} onChange={this.changeDetails} placeholder="Enter your job post" />
            </form>
            )
    }

}

export default Form

