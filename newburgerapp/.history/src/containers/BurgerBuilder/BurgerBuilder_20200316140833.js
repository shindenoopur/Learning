import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{

    constructor(props){
        super(props);
        this.state={...};
    }

    state={

    }

    render(){
        return(
            <Aux>
                <Burger />
                <div>Burger logo</div>
                <div>Build controls</div>
            </Aux>
        )
    };
}

export default BurgerBuilder;