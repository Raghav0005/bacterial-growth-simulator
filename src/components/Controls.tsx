import React from 'react';
import { ControlsProps } from '../types';

// Functional component for rendering control bittons and inputs for the simulation
export const Controls: React.FC<ControlsProps> = ({
  onStartPause,
  onReset,
  onIntervalChange,
  onSizeChange,
  gridSize,
  interval,
  running
}) => {
  // Dynamic creation of grid size options from 1x1 to 75x75
  const gridSizeOptions = Array.from({ length: 75 }, (_, index) => index + 1);

  return (
    <div style={{ fontSize: '14px' }}>
      <button onClick={onStartPause}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={onReset}>
        Reset
      </button>
      <div>
        <label>
          Interval (ms):
          <select value={interval} onChange={e => onIntervalChange(Number(e.target.value))}>
            <option value="50">50 ms</option>
            <option value="100">100 ms</option>
            <option value="250">250 ms</option>
            <option value="500">500 ms</option>
            <option value="1000">1000 ms</option>
            <option value="1500">1500 ms</option>
            <option value="2000">2000 ms</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Grid Size:
          <select value={gridSize} onChange={e => onSizeChange(Number(e.target.value))}>
            {gridSizeOptions.map(size => (
              <option key={size} value={size}>{`${size}x${size}`}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};
