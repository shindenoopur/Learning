import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger=(props)=>{
    return(
        <div class="Burger">
             <BurgerIngredient type="bread-top"/>
             <BurgerIngredient type="cheese"/>
             <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger