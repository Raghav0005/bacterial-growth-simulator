export interface CellProps {
    isOccupied: boolean;
    onClick: () => void;
}
  
export interface GridProps {
    cells: boolean[][];
    toggleCell: (row: number, col: number) => void;
}

export interface ControlsProps {
    onStartPause: () => void;
    onReset: () => void;
    onIntervalChange: (interval: number) => void;
    onSizeChange: (size: number) => void;
    gridSize: number;
    interval: number;
    running: boolean;
}  
  