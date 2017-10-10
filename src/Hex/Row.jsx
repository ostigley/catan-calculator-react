import React from 'react';
import Hex from './Hex.jsx';
export default ({rowNum, hexes, onChange, hexValues}) => {

  return (
    <div className="row">
        {hexes.map((hex, i) => (
                            <Hex hexId={hex.hexId}
                            key={`key_hex_id_${hex.hexId}`}
                            nodes={hex.nodes}
                            rowNum={rowNum}
                            hexIndex={i}
                            value={hex.value}
                            hexValues={hexValues}
                            onChange={onChange}/>)
                          )}
    </div>);
};

