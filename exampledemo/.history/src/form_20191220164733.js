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
        })
    }

    render(){
        const{name, job} = this.state;
        return 
    }

}

