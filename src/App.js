import React, { Component } from 'react';
import Row1 from './Hex/Row-1.jsx'
import Row2 from './Hex/Row-2.jsx'
import Row3 from './Hex/Row-3.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="catan-container">
        <Row1 />
        <Row2 />
        <Row3 />
        <Row2 />
        <Row1 />
      </div>);
  }
}

export default App;
