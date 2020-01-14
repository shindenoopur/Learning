import React from 'react';
import ReactDOM from 'react-dom';
import Game from './App';
import Democomponent from './democomponent'
import './index.css';
import { Switch, Route } from 'react-router';
import {
  BrowserRouter as Router,
  
  
  NavLink,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
        <Route path="/" component={Game}></Route>
        <Route path="/winnerlist" component={Democomponent}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
