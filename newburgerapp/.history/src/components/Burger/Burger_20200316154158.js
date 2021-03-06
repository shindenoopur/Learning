import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css';

const burger=(props)=>{
    console.log("props.ingredients"+props.ingredients.salads);
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        }); //Array(3) creates array with 3 undefinded spaces
    },
    ).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformedIngredients.length<0){
        transformedIngredients = <p>No elements are added to the burger</p>;
    }

    console.log("Transformed Ingredients"+{transformedIngredients})

    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;