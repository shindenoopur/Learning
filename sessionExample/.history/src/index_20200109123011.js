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
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isXNext: (step % 2) === 0,
      undoClicks: 1;
    });
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
      clickCount : this.state.clickCount + 1
    });

  }

  start = (e) => {
  
      if(this.state.player1 !=='' && this.state.player2!==""){
        this.setState({
          namesEntered: true
        })
      }
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

  undoMove = (event) => {
    
  }

    updatePlayer = (event) => {
    const {name,value} = event.target;
    console.log("name and value", name, "", value)
    this.setState({
        [name]: value
    });
  
}

  render() {
    const history = this.state.history;
    
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
    // console.log("move", history.length-1)
    let xyz = history.length-1;
    const moves = history.map((step, xyz) => {

      const desc = xyz ?
        'Go to move #' + xyz :
        'Go to game start';
      return (
        <li key={xyz}>
          <button onClick={() => this.jumpTo(xyz)}>{desc}</button>
        </li>
      );
    });
    const{player1, player2} = this.state
    console.log("Player1",player1,"pplayer 2", player2)
    let status;
    if (winner) {
      status = 'winner'+ this.state.player;
      this.state.winnername.push(this.state.player)
      console.log("winnername",this.state.winnername)
    } else {
      if(this.state.clickCount >= 9){
          status = "The match is draw"
        }
    
    
        else{
          if(!this.state.isXNext){
            this.state.player = this.state.player2
          }
          else{
            this.state.player = this.state.player1
          }
          status = 'Next player:'+ this.state.player;
        }
    }
    return (
      <div>
      <div className="game">
        <label>Player 1 name</label>
        <input type='text' value={player1} name="player1" onChange={this.updatePlayer}></input>
        <label>Player 2 name</label>
        <input type='text' value={player2} name="player2" onChange={this.updatePlayer}></input>
        <button onClick={this.start}>Start game</button>
      </div>
      <div>
        {this.state.namesEntered ? 
        <div className="game-board">
          <div>{status}</div>
          <Board  squares={current.squares}
            onClick={(i) => this.handleClick(i)}/>
            <button onClick={() => {let xyz = history.length-1; console.log("Updated move", xyz, "\n history:", this.state.history); this.jumpTo(xyz-1)}}>Undo</button>
          <button onClick={() => this.resetGame()}>ResetGame</button>
        </div> : <div>Please enter both players names</div>}
        
        <div className="game-info">
          
        <ol>
          {this.state.winnername.map((element, index)=>
          
              <li key={index}>{element}</li>
            
          )}
        </ol>
          <ol>{moves}</ol>
        </div>
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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);