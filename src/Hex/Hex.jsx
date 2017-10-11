import React from 'react';
import Node from './Node.jsx'
export default ({hexId, nodes, rowNum, hexIndex, value, onChange, hexValues}) => {
  const nodesToRender = nodes.map( (nodeName,i) => ( nodeName ? <Node
                                                nodeId={nodeName}
                                                position={i}
                                                key={`node_id_${nodeName}_${i}`}
                                                hexValues={hexValues}/> : null));

  const nextValue = value => {
    if (value === 12) return 0;
    if( value === 6) return 8;
    if (value === 0) return 2;
    return Number(value) + 1;
  }

  return (
    <div>
      <div className="hexagon" id={hexId} onClick={() => onChange(rowNum, hexIndex, hexId, nextValue(value))}>
        {nodesToRender}
          <div className="hexagon__value"><p>{value}</p></div>
      </div>
    </div>);
};

