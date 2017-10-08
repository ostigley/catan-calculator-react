import React, { Component } from 'react';
import Row from './Hex/Row.jsx'
import Row2 from './Hex/Row-2.jsx'
import Row3 from './Hex/Row-3.jsx'
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
