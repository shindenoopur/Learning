import React from "react"
import { Route } from "react-router-dom"
import Democomponent from "./democomponent";
import Game from "./App";

import createHistory from 'history/createBrowserHistory'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Game} />
      <Route path="/winnerlist" component={Democomponent} />
    </div>
  )
}

export default Routes