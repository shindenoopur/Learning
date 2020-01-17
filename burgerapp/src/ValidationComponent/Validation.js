import React from "react"

const Validation = (props) => {

    let validationText = null;
    if(props.textLength<=5){
        validationText="Text is too short"
    }
    else{
        validationText="Text Long enough"
    }

    return (
    <div>
        {validationText}
    </div>)
};

export default Validation