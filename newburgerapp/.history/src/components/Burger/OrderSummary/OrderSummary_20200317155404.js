import React from "react"
import Aux from "../../../hoc/Aux"

const OrderSummary=(props)=>{
    const summary=props.ingredients;
    return(
        <Aux>
            <h3>Your order is as follows:</h3>
            <ul>
                <li></li>
            </ul>
        </Aux>
        
    )
};

export default OrderSummary;