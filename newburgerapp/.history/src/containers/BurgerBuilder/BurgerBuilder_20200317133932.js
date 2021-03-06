import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDINET_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3    
}

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
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceaddition = INGREDINET_PRICES[type];
        const oldPrice =  this.state.totalPrice;
        const newPrice = priceaddition+oldPrice;
        console.log("PRice Additon", priceaddition+"+"+oldPrice+"+"+newPrice);
        this.setState({
            totalPrice:newPrice, ingredients:updatedIngredients
        })
    }

    removingIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDINET_PRICES[type];
        const oldPrice =  this.state.totalPrice;
        const newPrice = priceDeduction-oldPrice;
        console.log("PRice Deduction", priceDeduction+"+"+oldPrice+"+"+newPrice);
        this.setState({
            totalPrice:newPrice, ingredients:updatedIngredients
        })

        
    }

    render(){
        const disableButton = {
            ...this.state.ingredients
        };
        console.log("Total Price", this.state.totalPrice)
        for(let key in disableButton){
            disableButton[key] = disableButton[key] <= 0;
        }
        return(
            
            <Aux>
                <div>Burger logo</div>
                <Burger ingredients={this.state.ingredients}/>
                
                <div>Build controls</div>
                <BuildControls ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removingIngredientHandler}
                disabled={disableButton}
                price={this.state.totalPrice}
                />
            </Aux>
            
        )
    };
}

export default BurgerBuilder;