import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={...};
    // }

    //setting initial values and passing object to burger component

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
            
        },

        totalPrice:4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients;
        }
        updatedIngredients[type] = updatedCount;
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger logo</div>
                <div>Build controls</div>
                <BuildControls />
            </Aux>
            
        )
    };
}

export default BurgerBuilder;