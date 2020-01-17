import React, {Component} from "react"
import Person from "./Person/Person";

class Persons extends Component{

    static getDerivedStateFromProps(props, state){
        console.log("step 1[Persons.js] getDerviedStateFromProps")
        return state,
    }

    render(){
        console.log("Persons js render");
        return this.props.persons.map((person,index) => {
            return (<Person 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            onNameChange={(event) => {this.props.onchangeHandlerPersons(event, person.id)}} 
            ondeleteHandle={() => {this.props.deleteHandlerPersons(index)}}/>
        )})
    }

}

export default Persons
