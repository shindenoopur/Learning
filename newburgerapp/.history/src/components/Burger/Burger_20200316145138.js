import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css';

const burger=(props)=>{
    console.log("props.ingredients"+props.ingredients);
    const transformedIngredients = Object.keys(props.ingredients.salad())
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        }); //Array(3) creates array with 3 undefinded spaces
    },
    console.log("TRansformed Ingredients"+props.ingredients)
    );

    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;