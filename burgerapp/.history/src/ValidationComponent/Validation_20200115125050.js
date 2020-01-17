import React from "react"

const Validation = (props) => {

    const returnOutput = null;
    if(props.textLength<5){
        returnOutput="Text is too short"
    }
    else{
        returnOutput="Text Long enough"
    }

    return (
    <div>
        {returnOutput}
    </div>)
};

export default Validation