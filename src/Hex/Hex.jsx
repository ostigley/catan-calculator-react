import React from 'react';
import Node from './Node.jsx'
export default ({hexId, nodes}) => {
  const nodesToRender = nodes.map( (nodeName,i) => ( nodeName ? <Node
                                                nodeId={nodeName}
                                                position={i}
                                                key={`node_id_${nodeName}`}/> : null));
  return (
    <div>
      <div className="hexagon" id={hexId}>
        {nodesToRender}
        <select>
          <option value="0">D</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>);
};

