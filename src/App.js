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
    for(let row in this.state) {
      rows.push(<Row rowNum={row+1} key={`row_${row+1}`} hexes={this.state[row]}/>)
    }
    return (
      <div className="catan-container">
      { rows }

      </div>);
  }
}

export default App;
