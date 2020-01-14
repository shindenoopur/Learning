import React from 'react';
import ReactDOM from 'react-dom';
import Game from './App';
import './index.css';
import { Switch, Route } from 'react-router';

ReactDOM.render(
  <Router>
    <Switch>
        <Route path="/" component={Game}></Route>
        <Route path="/" component={Game}></Route>
    </Switch>
  </Router>
  <Game />,
  document.getElementById('root')
);
