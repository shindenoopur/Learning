import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css';

const burger=(props)=>{
    const transformedIngredients=Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map(_, i)=>{
            <BurgerIngredient key={igkey + i} type={igkey} />
        }; //Array method creates array in js
    });
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;