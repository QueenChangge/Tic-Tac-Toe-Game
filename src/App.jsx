/* eslint-disable react/prop-types */
import { useState } from 'react';

// set state for each squre
function Square({value, onSquareClick}) {

  // run function handle when onclik the square
  return (
  <button onClick={onSquareClick} className='square'>
    {value}
  </button>
)}

function Board() {
  // create squares state with array 9 elements
  const [squares, setSquares] = useState(Array(9).fill(null)); //squares filled
  const [xIsNext, setXIsNext] = useState(true);   // true : X, false : O

  // Arrange when Clicking the square
  function handleClick(i){
    // cant alter value square
    if(squares[i] || calculateWinner(squares)) return;

    // Create new array
    const nextSquares = squares.slice();

    // if(xIsNext){
    //   nextSquares[i] = 'X'; // ['X', null, null, null, null, null, null, null, null] // misalkan elemen  pertama
      
    // } else{
    //   nextSquares[i] = 'O'; // ['O', null, null, null, null, null, null, null, null]
    // }

    nextSquares[i] = xIsNext ? 'X' : 'O';
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }






  // Check the winner
  const winner = calculateWinner(squares);
  let status = '';
  if (winner){
    status = 'The winner is ' + winner;
  } else{
    status = 'Next player is ' + (xIsNext ? 'X' : 'O');
  }




  return (
    <>
      <div className='status'>{status}</div>
    
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>



  )
}


// create parent component
export default function Game(){
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <ol>
          {/* TODO */}
        </ol>
      </div>
    </div>
  )
}





function calculateWinner(squares) {
  const lines = [
    [3, 4, 5],
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i]; //destructuring

    if(squares[a] && squares[a] === squares[b] && squares[c]){
      return squares[a];
    } 
  }
  return false;
}