import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/Pages/Home';
import Navbar from './component/Pages/navbar';
import Qoute from './component/Pages/qoute';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="src/component/Pages/Home.js" element={<Home />} />
          <Route path="/component/Calculator" element={<Calculator />} />
          <Route path="src/component/Pages/qoute.js" element={<Qoute />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
