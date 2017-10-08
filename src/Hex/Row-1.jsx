import React from 'react';
import Hex from './Hex';
import {hexesRowsNodes} from '../hexesRowsNodes.js'
export default () => {
  const hexesToRender = hexesRowsNodes.rows["1"]
  const hexes = hexesToRender.map(hex => <Hex hexId={hex.hexId} key={`key_hex_id_${hex.hexId}`}/>);
  return (
    <div className="row">
        {hexes}
    </div>);
};

