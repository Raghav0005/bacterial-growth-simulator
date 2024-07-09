import React from 'react';
import { CellProps } from '../types/';

// component to represent a single cell in the grid
export const Cell: React.FC<CellProps> = React.memo(({ isOccupied, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: isOccupied ? 'green' : 'white',
        border: '1px solid black'
      }}
    />
  );
});
