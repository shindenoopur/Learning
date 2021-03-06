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
      clickCount: 0
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
      isXNext: !this.state.isXNext
    });

  }

  render() {

    console.log("clickCount", this.state.clickCount)
    const winner = calculateWinner(this.state.squares)

    this.state.clickCount = this.state.clickCount + 1;
    var status; 
    if(winner){
      status = 'winner'+ this.state.player
    }
    else if(this.state.clickCount >== 9){
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

    

    return (
      <div>
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