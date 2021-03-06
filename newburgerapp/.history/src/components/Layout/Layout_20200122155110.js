import React from "react"
import Aux from "../../hoc/Aux"

const layout=(props)=>(
    <Aux>
        <div>Toolbar, sidebar, backdrop</div>
        <main className="">{props.children}</main>
    </Aux>
);

export default layout;