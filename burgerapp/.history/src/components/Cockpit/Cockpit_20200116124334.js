import React from "react"

const cockpit=(props)=>{
    return(
        <div>
             <h2>Burger App</h2>
            <p className={classes.join(" ")}>Color changes according to the number of rows visible</p>
            <StyledButton conditionChange={this.state.showPersons} onClick={this.togglePersonHandler}>click me</StyledButton>
        </div>
    );
};