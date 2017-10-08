import React from 'react';

export default ({nodeId, position}) => {
  return (
    <div className={`node node--${position}`} id={nodeId}>
      {nodeId}
    </div>);
};

