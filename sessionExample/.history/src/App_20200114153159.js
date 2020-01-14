import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Democomponent from './democomponent'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
  Row,
  Alert
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function Square(props){
    return (
      <button className="square" squaredata={props.value} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }


class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      isXNext: true,
      player1:"",
      player2:"",
      clickCount: 0,
      namesEntered:false,
      winnername: [],
      stepNumber: 0,
      undoClicks: 0, 
      isStartClicked: false,
    }
  }
  
  start = (e) => {
      if(this.state.player1 !=='' && this.state.player2!==""){
        this.setState({
          namesEntered: true,
          isStartClicked: true,
        })
      }
    }
    
    updatePlayer = (event) => {
    const {name,value} = event.target;
    console.log("name and value", name, "", value, "", this.state)
  
    if(value.match("^[a-zA-Z ]*$")!=null){
      this.setState({
        [name]: value,
    });
    console.log("name and value", name, "", value, "", this.state)
  
    }

}

  render() {

    var winnersprev;

    const{player1, player2} = this.state
    console.log("clickCount is", this.state.clickCount, "undoClicks", this.state.undoClicks)
    let status;
    
    if(localStorage.getItem("Winnerarray") !== null){
      let demowinner = localStorage.getItem("Winnerarray").split(",")

    console.log("Demowinner", demowinner)
    winnersprev = demowinner.map((item, index) =>
      <li key={index}>{item}</li>
    )
    
    }
    return (
      <div>
        <Router>
      <Row>
      <div className="game">
      {!this.state.isStartClicked ? 
      <div>
        <Form className="form">
          <Col>
            <FormGroup>
              <label>Player 1 name:</label>
              <input disabled={this.state.namesEntered} type='text' value={player1} name="player1" onChange={this.updatePlayer}></input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label>Player 2 name:</label>
              <input type='text' disabled={this.state.namesEntered} value={player2} name="player2" onChange={this.updatePlayer}></input>
            </FormGroup>
            <FormGroup>
              <Link to="winnerlist"><button disabled={this.state.namesEntered && this.state.player1=="" && this.state.player2===""} color="primary" onClick={this.start}>Start game</button></Link>
            </FormGroup>
            <Alert color="info" hidden={this.state.namesEntered}>Please enter the names for both players</Alert>
          </Col>
        </Form>
        <div>
         <div style={{ display: localStorage.getItem("Winnerarray") ? "block" : "none" }}>
        <Col md="12"><strong>Previous game winners are:<ol>{winnersprev}</ol>
        </strong></Col><br />
        </div>
        
        <div className="game-info">
          
        <ol>
          {this.state.winnername.map((element, index)=>
          
              <li key={index}>{element}</li>
            
          )}
        </ol>
        </div>
      </div>
        </div>
      : <div>
          <Switch>
            <Route exact path="/winnerlist">
              <Democomponent player1={this.state.player1} player2={this.state.player2} allstate={this.state} jumpTo = {this.jumpTo}/>
            </Route>
          </Switch>
        </div>
    
    }
        
      </div>
      
      </Row>
      </Router>,
      </div>
    );
  }
}

ReactDOM.render(
<Game />,
document.getElementById('root')
);

export default Game;
