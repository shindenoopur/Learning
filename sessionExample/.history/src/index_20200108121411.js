import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

class Board extends React.Component {
  constructor(props){
    super(props)
    this.initialstate = {
      squares: Array(9).fill(null),
      isXNext: true,
      player: "player 1",
      clickCount: 0,
      player1:"",
      player2:""
    }
    this.state = this.initialstate
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }

  resetGame(){
    this.setState(this.initialstate);
    console.log(this.initialstate)
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.isXNext? 'X' : 'O';
    this.setState({
      squares: squares,
      isXNext: !this.state.isXNext,
      clickCount : this.state.clickCount + 1
    });

  }
  updatePlayer = (e) => {
    const{name, value};
    console.log("name and value", name, "", value)
    this.setState({
      [name]: value,
    })
  }

  render() {

    console.log("clickCount", this.state.clickCount)
    const winner = calculateWinner(this.state.squares)

    var status; 
    if(winner){
      status = 'winner'+ this.state.player
    }
    else {
      if(this.state.clickCount >= 9){
      status = "The match is draw"
    }


    else{
      if(!this.state.isXNext){
        this.state.player = "player 2"
      }
      else{
        this.state.player = "player 1"
      }
      status = 'Next player:'+ this.state.player;
    }
  }
    
    const{player1, player2} = this.state
    return (
      <div>
        Player 1 name<input type='text' value={player1} onChange={this.updatePlayer}></input>
        Player 2 name<input type='text' value={player2} onChange={this.updatePlayer}></input>
        
        <div className="status">{status}</div>
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
        <button onClick={() => this.resetGame()}>ResetGame</button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
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
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);