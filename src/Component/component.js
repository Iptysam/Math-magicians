import React from 'react';
import './component.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="main">
        <div className="min-calculator">
          <div className="min-bar">
            <input type="text" />
          </div>
          <div className="first row">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="color">÷</button>
          </div>
          <div className="2nd row">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="color">×</button>
          </div>
          <div className="3rd row">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="color">-</button>
          </div>
          <div className="4th row">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="color">+</button>
          </div>
          <div className="5th row">
            <button type="button" className="zero">0</button>
            <button type="button">.</button>
            <button type="button" className="color">+</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Calculator;
