import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={...};
    // }

    //setting initial values and passing object to burger component

    state={
        ingredients:{
            salad:2,
            bacon:1,
            cheese:2,
            meat:1
            
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger logo</div>
                <div>Build controls</div>
            </Aux>
            
        )
    };
}

export default BurgerBuilder;