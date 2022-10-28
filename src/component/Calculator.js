import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const num = e.target.textContent;
    const ans = calculate(state, num);
    setState(ans);
  };

  const { total, next, operation } = state;
  return (
    <div className="main">
      <div className="min-calculator">
        <div className="min-bar">
          {total}
          {operation}
          {next}
        </div>
        <div className="first row">
          <button type="button" onClick={handleClick}>AC</button>
          <button type="button" onClick={handleClick}>+/-</button>
          <button type="button" onClick={handleClick}>%</button>
          <button type="button" onClick={handleClick} className="color">÷</button>
        </div>
        <div className="2nd row">
          <button type="button" onClick={handleClick}>7</button>
          <button type="button" onClick={handleClick}>8</button>
          <button type="button" onClick={handleClick}>9</button>
          <button type="button" onClick={handleClick} className="color">×</button>
        </div>
        <div className="3rd row">
          <button type="button" onClick={handleClick}>4</button>
          <button type="button" onClick={handleClick}>5</button>
          <button type="button" onClick={handleClick}>6</button>
          <button type="button" onClick={handleClick} className="color">-</button>
        </div>
        <div className="4th row">
          <button type="button" onClick={handleClick}>1</button>
          <button type="button" onClick={handleClick}>2</button>
          <button type="button" onClick={handleClick}>3</button>
          <button type="button" onClick={handleClick} className="color">+</button>
        </div>
        <div className="5th row">
          <button type="button" onClick={handleClick} className="zero">0</button>
          <button type="button" onClick={handleClick}>.</button>
          <button type="button" onClick={handleClick} className="color">=</button>
        </div>
      </div>
    </div>

  );
}

export default Calculator;
