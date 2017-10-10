import React from 'react';
import Node from './Node.jsx'
export default ({hexId, nodes, rowNum, hexIndex, value, onChange, hexValues}) => {
  const nodesToRender = nodes.map( (nodeName,i) => ( nodeName ? <Node
                                                nodeId={nodeName}
                                                position={i}
                                                key={`node_id_${nodeName}_${i}`}
                                                hexValues={hexValues}/> : null));
  return (
    <div>
      <div className="hexagon" id={hexId}>
        {nodesToRender}
        <select onChange={e => onChange(rowNum, hexIndex, hexId, e.target.value)} value={value}>
          <option value="0">D</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>);
};

