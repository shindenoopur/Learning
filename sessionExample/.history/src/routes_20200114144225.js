import React from "react"
import { Route } from "react-router-dom"
import { Homepage, Dog, Cat } from "./components"

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/dog" component={Dog} />
      <Route path="/cat" component={Cat} />
    </div>
  )
}

export default Routes