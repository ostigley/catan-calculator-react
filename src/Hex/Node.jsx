import React from 'react';

export default ({nodeId, position, hexValues}) => {
  const parentHexes = nodeId.split('')
  const diceRollPropbability = hexValues.reduce( (total, hex) => {
  if (parentHexes.includes(String(hex.hexId))) {
      return Number(hex.value) + total
    } else {
      return total
    }
  }, 0);

  console.log(diceRollPropbability)
  return (
    <div className={`node node--${position}`} id={nodeId}>
    </div>);
};

