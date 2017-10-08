import React from 'react';
import Node from './Node.jsx'
export default ({hexId, nodes}) => {
  const nodesToRender = nodes.map( (nodeName,i) => (<Node
                                                nodeId={nodeName}
                                                position={i}
                                                key={`node_id_${nodeName}`}/>));
  return (
    <div>
      <div className="hexagon" id={hexId}>
        {nodesToRender}
      </div>
    </div>);
};

