import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const num = e.target.textContent;
    const ans = calculate(this.state, num);
    this.setState(ans);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main">
        <div className="min-calculator">
          <div className="min-bar">
            {total}
            {operation}
            {next}
          </div>
          <div className="first row">
            <button type="button" onClick={this.handleClick}>AC</button>
            <button type="button" onClick={this.handleClick}>+/-</button>
            <button type="button" onClick={this.handleClick}>%</button>
            <button type="button" onClick={this.handleClick} className="color">÷</button>
          </div>
          <div className="2nd row">
            <button type="button" onClick={this.handleClick}>7</button>
            <button type="button" onClick={this.handleClick}>8</button>
            <button type="button" onClick={this.handleClick}>9</button>
            <button type="button" onClick={this.handleClick} className="color">×</button>
          </div>
          <div className="3rd row">
            <button type="button" onClick={this.handleClick}>4</button>
            <button type="button" onClick={this.handleClick}>5</button>
            <button type="button" onClick={this.handleClick}>6</button>
            <button type="button" onClick={this.handleClick} className="color">-</button>
          </div>
          <div className="4th row">
            <button type="button" onClick={this.handleClick}>1</button>
            <button type="button" onClick={this.handleClick}>2</button>
            <button type="button" onClick={this.handleClick}>3</button>
            <button type="button" onClick={this.handleClick} className="color">+</button>
          </div>
          <div className="5th row">
            <button type="button" onClick={this.handleClick} className="zero">0</button>
            <button type="button" onClick={this.handleClick}>.</button>
            <button type="button" onClick={this.handleClick} className="color">=</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Calculator;
