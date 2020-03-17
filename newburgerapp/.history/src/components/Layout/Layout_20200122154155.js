import React from "react"
import Aux from "../../hoc/Aux"
const layout=(props)=>(
    <div>
        <div>Toolbar, sidebar, backdrop</div>
        <main>{props.children}</main>
    </div>
);