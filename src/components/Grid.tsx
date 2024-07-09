import React from 'react';
import { Cell } from './Cell';
import { GridProps } from '../types/';

// component to render a grid of cells
export const Grid: React.FC<GridProps> = ({ cells, toggleCell }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cells[0].length}, 20px)` }}>
      {cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isOccupied={cell}
            onClick={() => toggleCell(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};