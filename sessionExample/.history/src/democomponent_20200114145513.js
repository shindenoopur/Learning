import React, { Component } from 'react'
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

class Democomponent extends React.Component{
  console.log("In compo")
    constructor(props){
      super(props)
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
    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
  
      squares[i] = this.state.isXNext? 'X' : 'O';
      this.setState({
        history: history.concat([{
        squares: squares,
        }]),
        stepNumber: history.length,
        isXNext: !this.state.isXNext,
        clickCount : this.state.clickCount + 1,
        undoClicks: 0
      });
  
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        isXNext: (step % 2) === 0,
        undoClicks: 1,
        clickCount: this.state.clickCount - 1,
      });
    }

    resetGame(){
      this.setState({ 
        history: [{
          squares: Array(9).fill(null),
        }],
        isXNext: true,
        player: "player 1",
        clickCount: 0,
        stepNumber:0
      });
    }
    
    render(){
      console.log("In compo")
      const {player1, player2, allstate, jumpTo} = this.props
      const history = this.state.history;
      
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    var winnerspresent;
    winnerspresent = this.state.winnername.map((item, index) =>
      <li key={index}>{item}</li>
    )
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
            this.state.player = player2
          }
          else{
            this.state.player = player1
          }
          status = 'Next player: \t' + this.state.player
        }
    }

        console.log("In", player1, player2, allstate)
      return(
       
        //   <div className="game-board">
        //     <Row>
        //       <Col md="12">
        //       {status} 
        //       </Col>
        //       </Row>
        //       <Row> 
        //       <Col md="6"><br />
          
        //         <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/> 
        //       </Col>
        //       <Col md="3"><br />
        //     <Button color="primary" disabled={this.state.undoClicks===1 || winner || this.state.clickCount===0} onClick={() => {let xyz = history.length-1; console.log("Updated move", xyz, "\n history:", this.state.history); this.jumpTo(xyz-1)}}>Undo</Button>
        //     </Col>
        //     <Col md="3"><br />
        //     <Button color="primary" disabled={this.state.clickCount===0} onClick={() => this.resetGame()}>Reset</Button>
        //     </Col>
        //     </Row><br />
        //     <Row>
             
        //      </Row>
        //    <div style={{ display: localStorage.getItem("Winnerarray") ? "block" : "none" }}>
        //   <Col md="12"><strong>Winners are:<ol>{winnerspresent}</ol>
        //   </strong></Col><br />
        //   </div>
        // </div>
        
  <div>Hello</div>
      )
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
  function Square(props){
    return (
      <button className="square" squaredata={props.value} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  
  export default Democomponent