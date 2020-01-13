import React, { Component } from 'react'

class Democomponent extends React.Component{
    constructor(props){
      super(props)
  
    }
  
    
    render(){
      return(
        console.log("props:", this.props),
        <div>Hellosdsd</div>
      )
    }
   
  }
  
  export default Democomponent