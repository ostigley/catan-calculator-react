import React from 'react';
import Hex from './HexWithNodes.jsx';
import {hexesRowsNodes} from '../hexesRowsNodes.js'
export default () => {
  const hexesToRender = hexesRowsNodes.rows["1"]
  const hexes = hexesToRender.map(hex => (
                                    <Hex hexId={hex.hexId}
                                    key={`key_hex_id_${hex.hexId}`}
                                    nodes={hex.nodes} />)
                                  );

  return (
    <div className="row">
        {hexes}
    </div>);
};

