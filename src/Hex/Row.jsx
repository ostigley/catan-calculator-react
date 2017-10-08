import React from 'react';
import Hex from './Hex.jsx';
export default ({rowNum, hexes}) => {

  return (
    <div className="row">
        {hexes.map((hex, i) => (
                            <Hex hexId={hex.hexId}
                            key={`key_hex_id_${hex.hexId}`}
                            nodes={hex.nodes} rowNum={rowNum} hexIndex={i} />)
                          )}
    </div>);
};

