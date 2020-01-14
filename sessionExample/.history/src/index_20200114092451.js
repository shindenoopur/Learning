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

class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    );
  }
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
      undoClicks: 0
    }
  }
  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     isXNext: (step % 2) === 0,
  //     undoClicks: 1,
  //     clickCount: this.state.clickCount - 1,
  //   });
  // }
  // handleClick(i){
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1);
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }

  //   squares[i] = this.state.isXNext? 'X' : 'O';
  //   this.setState({
  //     history: history.concat([{
  //     squares: squares,
  //     }]),
  //     stepNumber: history.length,
  //     isXNext: !this.state.isXNext,
  //     clickCount : this.state.clickCount + 1,
  //     undoClicks: 0
  //   });

  // }

  start = (e) => {
  
      if(this.state.player1 !=='' && this.state.player2!==""){
        this.setState({
          namesEntered: true
        })
      }
    }
  // resetGame(){
  //   this.setState({ 
  //     history: [{
  //       squares: Array(9).fill(null),
  //     }],
  //     isXNext: true,
  //     player: "player 1",
  //     clickCount: 0,
  //     stepNumber:0
  //   });
  // }


    updatePlayer = (event) => {
    const {name,value} = event.target;
    console.log("name and value", name, "", value)
    if(value.match("^[a-zA-Z ]*$")!=null){
      this.setState({
        [name]: value
    });
    }

}

  render() {

    const history = this.state.history;
    
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    var winnersprev;
    
    // console.log("move", history.length-1)
    // const moves = history.map((step, xyz) => {

      // const desc = xyz ?
      //   'Go to move #' + xyz :
      //   'Go to game start';
      // return (
      //   <li key={xyz}>
      //     <button onClick={() => this.jumpTo(xyz)}>{desc}</button>
      //   </li>
      // );
    // });
    
    
    const{player1, player2} = this.state
    console.log("clickCount is", this.state.clickCount, "undoClicks", this.state.undoClicks)
    let status;
    
    if (winner) {
      status = 'Current game winner is: \t'+ this.state.player;
      this.state.winnername.push(this.state.player)
      console.log("winnername",this.state.winnername)
      localStorage.setItem("Winnerarray", this.state.winnername)
    } else {
      if(this.state.clickCount >= 9){
         this.state.undoClicks =1
          this.state.winnername.push("Draw")
          status = "\t The match is draw"
        }   
    
        else{
          if(!this.state.isXNext){
            this.state.player = this.state.player2
          }
          else{
            this.state.player = this.state.player1
          }
          status = 'Next player: \t' + this.state.player;
        }
    }

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
              <Link to="winnerlist" disabled={this.state.namesEntered} color="primary" onClick={this.start}>Start game</Link>
            </FormGroup>
            <Alert color="info" hidden={this.state.namesEntered}>Please enter the names for both players</Alert>
          </Col>
        </Form>
      </div>
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
        
        {/* <Link to="winnerlist">List</Link> */}
    <Route path="/"><Game /></Route>
    <Route exact path="/winnerlist">
      <Democomponent player1={this.state.player1} player2={this.state.player2} allstate={this.state} jumpTo = {this.jumpTo}/>
    </Route>
  
          
          
            
  
          {/* <ol>{moves}</ol> */}|
        </div>
      </div>
      </Row>
      </Router>,
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

ReactDOM.render(
 
  
 <Game />,
document.getElementById('root')
);