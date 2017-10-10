import React from 'react';

export default ({nodeId, position, hexValues}) => {
  const stats = {
    '0': 0,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '8': 5,
    '9': 4,
    '10': 3,
    '11': 2,
    '12': 1
  }
  const parentHexes = nodeId.split('')
  const nodeScore = hexValues.reduce( (total, hex) => {

  if (parentHexes.includes(String(hex.hexId))) {
      return stats[String(hex.value)] + total
    } else {
      return total
    }
  }, 0);

  return (
    <div className={`node node--${position} node--probability-${nodeScore}`} id={nodeId}>
      <p>{nodeScore}</p>
    </div>);
};

