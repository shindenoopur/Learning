import React, { Component } from 'react'

class democomponent extends React.Component{
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
  