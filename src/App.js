import React from 'react';
import Calculator from './component/Calculator.js';
import './index.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Do your Calculations</h1>
        <Calculator />
      </div>
    );
  }
}
export default App;
