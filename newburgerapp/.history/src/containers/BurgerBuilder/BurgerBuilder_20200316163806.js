import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{

    render(){
        return(
            <Aux>
                <div>Burger logo</div>
                <div>Build controls</div>
                <div></div>
            </Aux>
        )
    };
}

export default BurgerBuilder;