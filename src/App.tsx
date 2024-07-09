import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from './components/Grid';
import { Controls } from './components/Controls';

// Function to create a grid of specified size filled with 'false' initial values
const createEmptyGrid = (size: number) => Array(size).fill(null).map(() => Array(size).fill(false));

// Main App component for the application, containing all logic and subcomponents
const App: React.FC = () => {
  // state for the grid size, initialized to 20x20
  const [cells, setCells] = useState<boolean[][]>(createEmptyGrid(20));
  // state for the interval of the simulation, initialized to 1000 miliseconds
  const [gridSize, setGridSize] = useState<number>(20);
  // state for storing the grid cells, initially all cells are empty
  const [interval, setInterval] = useState<number>(1000);
  // state for controlling the running status of the simulation
  const [running, setRunning] = useState<boolean>(false);

  // updates the grid size and resets the simulation when the user changes the grid size
  const handleSizeChange = useCallback((newSize: number) => {
    if (newSize && newSize > 0) {
      setGridSize(newSize);
      setCells(createEmptyGrid(newSize));
      setRunning(false); // stop the simulation when the grid size changes
    }
  }, []);

  // effect to reinitialize the grid when the size changes
  useEffect(() => {
    setCells(createEmptyGrid(gridSize));
  }, [gridSize]);

  // toggles the occupancy state of a specific cell in the grid
  const toggleCell = useCallback((row: number, col: number) => {
    setCells(current => {
        // create a deep copy of the current cells array
        const newGrid = current.map(row => [...row]);
        
        // toggle the specific cell's boolean value
        newGrid[row][col] = !newGrid[row][col];

        // return the modified grid
        return newGrid;
    });
}, []);


  // toggles the running state of the simulation, starting or pausing it
  const startPauseSimulation = useCallback(() => {
    setRunning(r => !r);
  }, []);

  // resets the similation to its initial state
  const resetSimulation = useCallback(() => {
    setGridSize(20);
    setCells(createEmptyGrid(20));
    setRunning(false);
  }, []);

  // effect to update the simulation at each interval when it is running
  useEffect(() => {
    if (!running) return;

    const timer: number = window.setInterval(() => {
      setCells(current => {
        const newCells = current.map(row => row.slice());
        for (let row = 0; row < current.length; row++) {
          for (let col = 0; col < current[row].length; col++) {
            if (current[row][col]) {
              // identifying neighbors that are "unoccupied" right now
              const neighbors = [
                [row - 1, col], [row + 1, col],
                [row, col - 1], [row, col + 1]
              ].filter(([x, y]) => 
                x >= 0 && y >= 0 && x < current.length && y < current[row].length && !current[x][y]
              ); // filtering the indexes based on what is possible

              // randomly selecting one neighbor to become occupied
              if (neighbors.length > 0) {
                const [newRow, newCol] = neighbors[Math.floor(Math.random() * neighbors.length)];
                newCells[newRow][newCol] = true;
              }
            }
          }
        }
        return newCells; // update the grid state with the new configuration
      });
    }, interval);
    // clear the interval when the interval or running state changes
    return () => window.clearInterval(timer);
  }, [running, interval]);

  return (
    <div>
      <Grid cells={cells} toggleCell={toggleCell} />
      <Controls 
      onStartPause={startPauseSimulation} 
      onReset={resetSimulation} 
      onIntervalChange={setInterval} 
      onSizeChange={handleSizeChange}
      gridSize={gridSize} 
      interval={interval}
      running={running} />
    </div>
  );
};

export default App;
