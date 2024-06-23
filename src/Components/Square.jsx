import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      style={{
        backgroundColor:
          value === 'X' ? 'lightblue' : value === 'O' ? 'lightcoral' : 'white',
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
