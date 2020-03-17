import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger=(props)=>{
    return(
        <div class="Burger">
            <div>HI am a burger.js</div>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;