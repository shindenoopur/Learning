import React from "react"
import Person from "./Person/Person";

const persons = (props) =>

    return props.persons.map((person,index) => {
        <Person 
        name={person.name} 
        age={person.age} 
        key={person.id} 
        onNameChange={(event) => {props.onchangeHandlerPersons(event, person.id)}} 
        ondeleteHandle={() => {props.deleteHandlerPersons(index)}}/>
    });

export default persons
