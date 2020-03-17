import React from "react"
import Aux from "../../../hoc/Aux"

const OrderSummary=(props)=>{
    const summary=Object.keys(props.ingredients)
    .map(igKey => {
    return <li><span>{igKey}</span>:{props.ingredients[igKey]}</li>
    });
    return(
        <Aux>
            <h3>Your order is as follows:</h3>
            <ul>
                {summary}
            </ul>
        </Aux>
        
    )
};

export default OrderSummary;