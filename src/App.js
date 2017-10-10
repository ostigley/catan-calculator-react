import React, { Component } from 'react';
import Row from './Hex/Row.jsx'
import {hexesRowsNodes} from './hexesRowsNodes.js'
import flatten  from 'lodash.flatten';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = hexesRowsNodes
  }



  onChange(rowNum, hexIndex, hexId, value) {
    const newState = this.state;
    const row = newState[rowNum];
    row[hexIndex].value = value
    this.setState(newState)
  }

  render() {

    const hexValues = flatten([this.state['1'],
                               this.state['2'],
                               this.state['3'],
                               this.state['4'],
                               this.state['5']])
                              .map( r => ({hexId: r.hexId, value: r.value}));
    const rows = []
    for(let row in this.state) {
      rows.push(<Row
                  rowNum={Number(row)}
                  key={`row_${Number(row)+1}`}
                  hexes={this.state[row]}
                  hexValues={hexValues}
                  onChange={this.onChange.bind(this)}/>)
    }

    return (
      <div className="catan-container">
        { rows }
      </div>);
  }
}

export default App;
