import React, { Component } from 'react';
import Row from './Hex/Row.jsx'
import {hexesRowsNodes} from './hexesRowsNodes.js'
import './App.css';

class App extends Component {
  render() {

    const rows = null;

    return (
      <div className="catan-container">
        {hexesRowsNodes.rows.map((row, i) => <Row rowNum={i+1} key={`row_${i+1}`} hexes={row}/>)}
      </div>);
  }
}

export default App;
