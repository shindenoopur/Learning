import React, { Component } from 'react'

class Democomponent extends React.Component{
    constructor(props){
      super(props)
  
    }
  
    
    render(){
        console.log("In")
      return(
        console.log("props:", this.props),
        <div>Hellosdsd</div>
      )
    }
   
  }
  
  export default Democomponent