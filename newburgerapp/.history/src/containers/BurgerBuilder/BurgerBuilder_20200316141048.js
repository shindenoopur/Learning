import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={...};
    // }

    //setting initial values and passing array to burger component

    state={
        salad:1,
        bacon:1,
        cheese:2,
        meat:2
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