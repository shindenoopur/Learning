import React, {Component} from "react"
import Person from "./Person/Person";

class Persons extends Component{
    
    render(){
        return props.persons.map((person,index) => {
            return (<Person 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            onNameChange={(event) => {props.onchangeHandlerPersons(event, person.id)}} 
            ondeleteHandle={() => {props.deleteHandlerPersons(index)}}/>
        )})

}

export default Persons;
