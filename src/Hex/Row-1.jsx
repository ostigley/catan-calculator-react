import React from 'react';
import Hex from './Hex'
export default () => {
  const hexes = [ {hexId: 's'}, {hexId: 'h'}, {hexId: 'i'} ];
  return (
    <div className="row">
        <Hex />
        <Hex />
        <Hex />
    </div>);
};

