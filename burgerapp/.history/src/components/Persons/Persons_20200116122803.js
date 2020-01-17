import React from "react"
import Person from "./Person/Person";

const persons=(props)=>
    props.persons.map((person,index) => {
        return <Person 
        name={person.name} 
        age={person.age} 
        key={person.id} 
        onNameChange={(event) => {props.onchangeHandler(event, person.id)}} 
        ondeleteHandle={() => {props.deleteHandler(index)}}/>
      });

export default persons
