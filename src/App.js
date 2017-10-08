import React, { Component } from 'react';
import Row from './Hex/Row.jsx'
import {hexesRowsNodes} from './hexesRowsNodes.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = hexesRowsNodes
  }

  onChange(rowNum, hexIndex, hexId, value) {
    const row = this.state[rowNum];
    row[hexIndex].value = value
    this.setState(row)
  }
  render() {
    const rows = []
    for(let row in this.state) {
      rows.push(<Row rowNum={Number(row)} key={`row_${Number(row)+1}`} hexes={this.state[row]}/>)
    }
    return (
      <div className="catan-container">
      { rows }

      </div>);
  }
}

export default App;
