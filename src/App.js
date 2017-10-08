import React, { Component } from 'react';
import Row from './Hex/Row.jsx'
import {hexesRowsNodes} from './hexesRowsNodes.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = hexesRowsNodes
  }

  onChange(row, hexId, value) {
    this.setState()
  }
  render() {
    const rows = []
    for(let i = 0; i < 5 ;i++) {
      rows.push(<Row rowNum={i+1} key={`row_${i+1}`} hexes={this.state.rows[i]}/>)
    }
    return (
      <div className="catan-container">
      { rows }

      </div>);
  }
}

export default App;
