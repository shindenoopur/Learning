import React from "react"

const Char=(props)=>{
    const styleChar={
        display:"inline-block",
        padding:"16px",
        margin:"16px",
        border:"1px solid black"
    };

    return(
        <div style={styleChar} onClick={props.deleteClicked}>
            {props.character}
        </div>        
        )
};


export default Char