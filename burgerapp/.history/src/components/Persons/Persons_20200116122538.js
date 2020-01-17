import React from "react"
import Person from "./Person/Person";

const persons=(props)=>
    persons.map((person,index) => {
        return <Person 
        name={person.name} 
        age={person.age} 
        key={person.id} 
        onNameChange ={(event) => {this.onchangeHandler(event, person.id)}} 
        ondeleteHandle = {() => {this.deleteHandler(index)}}/>
      })
;