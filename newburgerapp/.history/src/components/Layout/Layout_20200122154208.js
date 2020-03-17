import React from "react"
import Aux from "../../hoc/Aux"

const layout=(props)=>(
    <AUX>
        <div>Toolbar, sidebar, backdrop</div>
        <main>{props.children}</main>
    </Aux>
);