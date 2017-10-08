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
        {hexId}
      </div>
    </div>);
};

