import React, {Component} from "react"
import Person from "./Person/Person"
import AuthContext from "../Context/auth-context"

class Persons extends Component{

    // static getDerivedStateFromProps(props, state){
    //     console.log("step 1[Persons.js] getDerviedStateFromProps")
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("[Persons js shouldcompnentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons js getsnapshotbeforupdate");
        return{message: "snapshot"}
    }

    componentDidUpdate(){
        console.log("[Persons js componentDidUpdate")
    }

    render(){
        console.log("Persons js render");
        return this.props.persons.map((person,index) => {
            return (<Person 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            onNameChange={(event) => {this.props.onchangeHandlerPersons(event, person.id)}} 
            ondeleteHandle={() => {this.props.deleteHandlerPersons(index)}}
            isAuth={this.props.isAuthenticated}
            />
        )})
    }

}

export default Persons
